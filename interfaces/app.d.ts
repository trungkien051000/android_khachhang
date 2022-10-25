declare module '@env' {
    export const API_URL: string;
    export const APP_NAME: string;
}

declare module '@voximplant/react-native-foreground-service' {
    export async function createNotificationChannel(data: { id: string; name: string; description: string; enableVibration: boolean });
    export async function startService(data: { channelId: string; id: number; title: string; text: string; icon: string });
    export async function stopService();
}
