import { device, expect, element, by } from 'detox';

beforeAll(async () => {
  await device.launchApp();  // Launch the app before running the tests  
});

afterAll(async () => {
  await device.shutdown();   // Proper shutdown for the device
});

describe('Home Screen', () => {
  it('should have the React Native logo', async () => {
    await expect(element(by.id('react-native-logo'))).toBeVisible();
  });
});
