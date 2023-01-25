import { render, fireEvent } from '@testing-library/react-native';
import PayPalDonate from '../Components/Screens/Support';
import * as Linking from 'expo-linking';

jest.mock('expo-linking', () => ({
openURL: jest.fn(),
}));

describe('<PayPalDonate />', () => {
it('renders correctly', () => {
const { getByText } = render(<PayPalDonate email="test@test.com" amount={10} />);
expect(getByText('Slack’s is completely independent! We rely solely on subscriptions and donations. Please consider becoming a Slack’s Supporter.')).toBeTruthy();
expect(getByText('Click here to Donate!')).toBeTruthy();
});

it('opens the donate link when the button is pressed', async () => {
const { getByText } = render(<PayPalDonate email="test@test.com" amount={10} />);
const donateButton = getByText('Click here to Donate!');
fireEvent.press(donateButton);
expect(Linking.openURL).toHaveBeenCalledWith('https://www.paypal.com/donate?hosted_button_id=ADX2PRR8X28CJ');
});
});