import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

type Product = {
    id: string;
    title: string;
    description: string;
    price: number; 
    image: {
      src: string;
    };
  };

type Collection = {
  id: string;
  title: string;
  products: Product[];
};

const ShopifyStore: React.FC = () => {
  const navigation = useNavigation();
  const [collections, setCollections] = useState<Collection[]>([]);

  // Fetch collections from Shopify Storefront API
  useEffect(() => {
    const fetchCollections = async () => {
      const response = await fetch(
        'https://{your-store-name}.myshopify.com/api/2021-07/graphql.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Storefront-Access-Token': '{your-storefront-api-token}',
          },
          body: JSON.stringify({
            query: `
              query {
                collections(first: 10) {
                  edges {
                    node {
                      id
                      title
                      products(first: 10) {
                        edges {
                          node {
                            id
                            title
                            description
                            priceRange {
                              minVariantPrice {
                                amount
                                currencyCode
                              }
                            }
                            images(first: 1) {
                              edges {
                                node {
                                  originalSrc
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            `,
          }),
        },
      );
      const result = await response.json();
      setCollections(
        result.data.collections.edges.map((edge: any) => ({
          id: edge.node.id,
          title: edge.node.title,
          products: edge.node.products.edges.map((product: any) => ({
            id: product.node.id,
            title: product.node.title,
            description: product.node.description,
            price: product.node.priceRange.minVariantPrice.amount,
            image: {
              src: product.node.images.edges[0].node.originalSrc,
            },
          })),
        })),
      );
    };

    fetchCollections();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopify Store</Text>
      <FlatList
        data={collections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.collection}>
            <Text style={styles.collectionTitle}>{item.title}</Text>
            <FlatList
              data={item.products}
              keyExtractor={(product) => product.id}
              horizontal={true}
              renderItem={({ item: product }) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ProductDetails', { product })
                  }>
                  <View style={styles.product}>
                    <Image
                      style={styles.productImage}
                      source={{ uri: product.image.src }}
                    />
                    <Text style={styles.productTitle}>{product.title}</Text>
                    <Text style={styles.productPrice}>${product.price}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
    collectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      product: {
        marginRight: 16,
      },
      productImage: {
        width: 120,
        height: 120,
        borderRadius: 8,
        marginBottom: 8,
      },
      productTitle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      productPrice: {
        fontSize: 16,
        color: 'gray',
      },
       collection: {
    flex: 16,
    flexDirection: "row",
    marginBottom: 8,
  }
    });
    
    export default ShopifyStore;
    