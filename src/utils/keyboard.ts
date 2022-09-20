import { Keyboard } from 'react-native'; 

export const dismiss = () =>
    Keyboard.dismiss()

export const getManualHandlingProp = () => ({
    keyboardShouldPersistTaps: 'handled',
});