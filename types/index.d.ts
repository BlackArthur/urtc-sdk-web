export declare type VideoCodec = 'vp8'|'h264';
export declare type AudioCodec = 'opus';

export declare type RoomType = 'rtc'|'live';
export declare type UserRole = 'pull'|'push'|'push-and-pull';
export declare type DeviceType = 'audio'|'video';

// 业务方使用的事件类型
export declare type EventType = 'user-added' | 'user-removed' |
  'stream-added' | 'stream-removed' | 'stream-published' | 'stream-subscribed' |
  'mute-video' | 'unmute-video' | 'mute-audio' | 'unmute-audio' | 'screenshare-stopped';

export declare type WaterMarkPosition = 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom'; // 左上，左下，右上，右下
export declare type WaterMarkType = 'time' | 'image' | 'text';
export declare type MainViewType = 'desktop' | 'screen' | 'camera'; // todo - remove desktop

export interface ClientOptions {
  type?: RoomType
  role?: UserRole
  codec?: VideoCodec  // 可设 vp8 或 h264，默认为 vp8
}

export interface Codecs {
  audio: Array<string>,
  video: Array<string>
}

export interface PublishOptions {
  audio: boolean    // 是否开启麦克风
  video: boolean    // 是否开启摄像头
  screen: boolean   // 是否共享屏幕
  microphoneId?: string // 麦克风设备ID
  cameraId?: string     // 摄像头设备ID
  extensionId?: string  // chrome插件ID
  mediaStream?: MediaStream // 自定义的媒体流
}

export interface DeviceOptions {
  audio: boolean        // 是否开启麦克风
  video: boolean        // 是否开启摄像头
  microphoneId?: string // 麦克风设备ID
  cameraId?: string     // 摄像头设备ID
}

export interface DeviceDetectionOptions {
  audio: boolean          // 必填，指定是否检测麦克风设备
  video: boolean          // 必填，指定是否检测摄像头设备
  microphoneId?: string   // 选填，指定需要检测的麦克风设备的ID，可通过 getMicrophones 方法查询获得该ID，不填时，将检测默认的麦克风设备
  cameraId?: string       // 选填，指定需要检测的摄像头设备的ID，可以通过 getCameras 方法查询获得该ID，不填时，将检测默认的摄像头设备
}

export interface User {
  uid: string     // 用户ID
}

export interface Stream {
  sid: string                     // 流ID
  uid: string                     // 对应的用户的ID
  type: 'publish'|'subscribe'     // 流类型
  mediaType?: 'camera'|'screen'   // 流的媒体类型，用于对发布流的区分
  video: boolean                  // 是否包含音频
  audio: boolean                  // 是否包含视频
  muteAudio: boolean              // 音频是否静音
  muteVideo: boolean              // 视频是否静音
  mediaStream?: MediaStream       // 业务侧自定义媒体流
}

export interface LeaveRoomOptions {
  keepRecording: boolean      // 是否保持服务端录制，默认不保持
}

export interface AudioVolumeOptions {
  streamId?: string
  element?: HTMLMediaElement
  volume: number
}

export interface WaterMarkOptions {
  position?: WaterMarkPosition
  type?: WaterMarkType   // 水印类型
  remarks?: string       // 水印备注
}

export interface MixStreamOptions {
  width?: number         // 混流后视频的宽度
  height?: number        // 混流后视频的高度
  template?: number      // 混流模板，对应不同的录制布局
  isAverage?: boolean    // 是否均匀，均分对应平铺，不均分对应垂直
}

export interface RelayOptions {
  time?: number,         // 转推开启时间的时间戳，不填时，将默认使用当前时间的时间戳
  fragment: number,      // 切片
}

export interface RecordOptions {
  bucket: string
  region: string
  uid?: string           // 指定某用户的流为主画面
  mainViewType?: MainViewType    // 主画面类型
  mixStream?: MixStreamOptions
  waterMark?: WaterMarkOptions
  relay?: RelayOptions
}

export interface Record {
  FileName: string,
  RecordId: string
}

export interface EffectOptions {
  streamId?: string
  effectId: number
  filePath?: string
  loop?: boolean
  playTime?: number
  replace?: boolean
}

export interface EffectVolumeOptions {
  streamId?: string
  effectId: number
  volume: number
}

export interface SwitchDeviceOptions {
  streamId?: string
  type: DeviceType
  deviceId: string
}

export interface SwitchImageOptions {
  streamId?: string
  file?: File,
  filePath?: string
}

export interface SnapshotOptions {
  streamId?: string
  download?: string | boolean
}

export interface AudioStats {
  br: number
  lostpre: number
  vol: number
  mime: string
}

export interface VideoStats {
  br: number,
  lostpre: number,
  frt: number,
  w: number,
  h: number,
  mime: string
}

export interface NetworkStats {
  rtt: number
}
