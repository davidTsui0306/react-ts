import { http } from "@/utils";

// 泛型
type ResType<T> = {
    message: string;
    data: T
}

// 具體
type ChannelItem = {
    id: number;
    name: string;
}

type ChannelRes = {
    channels: ChannelItem[];
}

// 請求頻道列表
export function fetchChannelAPI() {
    http.request<ResType<ChannelRes>>({
        method: 'GET',
        url: '/channels'
    })
}

