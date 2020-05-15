# UCloudRTC Web SDK API 手册

UCloudRTC 包含以下方法、类或对象：

* [一、Client 类](#client)
* [二、getDevices 方法](#getdevices)
* [三、getSupportProfileNames 方法](#getsupportprofilenames)
* [四、getSupportedCodec 方法](#getsupportedcodec)
* [五、isSupportWebRTC 方法](#issupportwebrtc)
* [六、deviceDetection 方法](#devicedetection)
* [七、version 属性](#version)
* [八、generateToken 方法](#generateToken)
* [九、Logger 对象](#logger)
* [十、setServers 方法](#setservers)

> 注： 想要了解使用此 SDK 的简单步骤，请查看 [使用说明](./Manual.md)

---

<a name='client'></a>

## 一、Client 类

Client 类包含以下方法：

* [构造函数 - 创建客户端](#client-constructor)
* [joinRoom 方法 - 加入房间](#client-joinroom)
* [leaveRoom 方法 - 离开房间](#client-leaveroom)
* [publish 方法 - 发布本地流](#client-publish)
* [unpublish 方法 - 取消发布本地流](#client-unpublish)
* [subscribe 方法 - 订阅远端流](#client-subscribe)
* [unsubscribe 方法 - 取消订阅远端流](#client-unsubscribe)
* [on 方法 - 绑定事件处理函数](#client-on)
* [off 方法 - 解绑事件处理函数](#client-off)
* [play 方法 - 播放一条流的音视频](#client-play)
* [resume 方法 - 恢复一条流的音视频播放](#client-resume)
* [muteAudio 方法 - 禁用音频轨道](#client-muteaudio)
* [unmuteAudio 方法 - 启用音频轨道](#client-unmuteaudio)
* [muteVideo 方法 - 禁用视频轨道](#client-mutevideo)
* [unmuteVideo 方法 - 启用视频轨道](#client-unmutevideo)
* [~~startRecording 方法 - 已废弃~~](#client-startrecording)
* [~~stopRecording 方法 - 已废弃~~](#client-stoprecording)
* [getUser 方法 - 获取当前用户信息](#client-getuser)
* [getUsers 方法 - 获取所有远端用户信息](#client-getusers)
* [getStream 方法 - 获取某条流信息](#client-getstream)
* [getLocalStreams 方法 - 获取所有本地流信息](#client-getlocalstreams)
* [getRemoteStreams 方法 - 获取所有远端流信息](#client-getremotestreams)
* [~~getStreams 方法 - 已废弃~~](#client-getstreams)
* [getMediaStream 方法 - 获取某条流对应的媒体流](#client-getmediastream)
* [~~getLocalMediaStream 方法 - 已废弃~~](#client-getlocalmediastream)
* [~~getRemoteMediaStream 方法 - 已废弃~~](#client-getremotemediastream)
* [getMicrophones 方法 - 获取麦克风设备信息](#client-getmicrophones)
* [getCameras 方法 - 获取摄像头设备信息](#client-getcameras)
* [getLoudspeakers 方法 - 获取扬声器设备信息](#client-getloudspeakers)
* [setVideoProfile 方法 - 设置视频属性](#client-setvideoprofile)
* [switchDevice 方法 - 切换音视频输入设备](#client-switchdevice)
* [switchScreen 方法 - 切换屏幕共享](#client-switchscreen)
* [switchImage 方法 - 切换图片推送](#client-switchimage)
* [getAudioVolume 方法 - 获取音频音量](#client-getaudiovolume)
* [setAudioVolume 方法 - 设置音频音量](#client-setaudiovolume)
* [getAudioStats 方法 - 获取音频状态](#client-getaudiostats)
* [getVideoStats 方法 - 获取视频状态](#client-getvideostats)
* [getNetworkStats 方法 - 获取网络状态](#client-getnetworkstats)
* [preloadEffect 方法 - 预加载音效文件](#client-preloadeffect)
* [unloadEffect 方法 - 卸载音效文件](#client-unloadeffect)
* [playEffect 方法 - 开始播放音效](#client-playeffect)
* [pauseEffect 方法 - 暂停播放音效](#client-pauseeffect)
* [resumeEffect 方法 - 恢复播放音效](#client-resumeeffect)
* [stopEffect 方法 - 停止播放音效](#client-stopeffect)
* [setEffectVolume 方法 - 设置播放音效的音量](#client-seteffectvolume)
* [snapshot 方法 - 截屏](#client-snapshot)
* [startPreviewing 方法 - 开启预览](#client-startpreviewing)
* [stopPreviewing 方法 - 停止预览](#client-stoppreviewing)
* [~~deviceDetection 方法 - 已转移~~](#client-devicedetection)
* [replaceTrack 方法 - 替换音频轨道或视频轨道](#client-replacetrack)
* [~~startMix 方法 - 已废弃~~](#client-startmix)
* [~~stopMix 方法 - 已废弃~~](#client-stopmix)
* [~~queryMix 方法 - 已废弃~~](#client-querymix)
* [~~addMixStreams 方法 - 已废弃~~](#client-addmixstreams)
* [~~removeMixStreams 方法 - 已废弃~~](#client-removemixstreams)
* [setRole 方法 - 设置用户角色](#client-setrole)
* [startRecord 方法 - 开启录制](#client-startrecord)
* [stopRecord 方法 - 结束录制](#client-stoprecord)
* [updateRecordStreams 方法 - 增加/删除录制的流](#client-updaterecordstreams)
* [startRelay 方法 - 开启转推](#client-startrelay)
* [stopRelay 方法 - 结束转推](#client-stoprelay)
* [updateRelayStreams 方法 - 增加/删除转推的流](#client-updaterelaystreams)

<a name="client-constructor"></a>

### 1. 构造函数

用于创建一个 URTC Client 对象，示例代码：

```
new Client(AppId, Token, ClientOptions);
```

#### 参数说明

- AppId: string 类型, 必传，可从 UCloud 控制台查看

- Token: string 类型, 必传，需按规则生成，测试阶段，可使用 [generateToken](#generateToken) 临时生成

- ClientOptions: object 类型, 选传，类型说明如下

```
{
  type?: "rtc" | "live",  // 选填，设置房间类型，有两种 "live" 和 "rtc" 类型可选 ，分别对应直播模式和连麦模式，默认为 rtc
  role?: "pull" | "push" | "push-and-pull",   // 选填，设置用户角色，可设 "pull" | "push" | "push-and-pull" 三种角色，分别对应拉流、推流、推+拉流，默认为 "push-and-pull"，特别地，当房间类型为连麦模式（rtc）时，此参数将被忽视，会强制为 "push-and-pull"，即推+拉流
  codec?: "vp8" | "h264", // 选填，设置视频编码格式，可设 "vp8" 或 "h264"，默认为 "vp8"
}
```

<a name="client-joinroom"></a>

### 2. joinRoom 方法

加入房间，示例代码：

```
client.joinRoom(RoomId, UserId, onSuccess, onFailure)
```

#### 参数说明

- RoomId: string 类型，必传，房间号

- UserId: string 类型，必传，用户ID

- onSuccess: function 类型，选传，方法调用成功时执行的回调函数，函数说明如下

```
function onSuccess(Users, Streams) {}
```

函数参数 Users 为返回值，User 类型的数组，代表当前房间内已有的其他用户的信息，User 类型说明见 [User](#user)；函数参数 Streams 为返回值，Stream 类型的数组，代表当前房间内其他用户正在发布的流。Stream 类型说明见 [Stream](#stream)

> 注：当加入房间成功后，当前房间内已有的其他用户的信息以及正在发布的流，都会分别由 `user-added` 和 `stream-added` 事件再进行通知。如需订阅正在发布的流，建议在 `stream-added` 事件函数中统一处理，此处 `onSuccess` 函数的参数 `Users` 和 `Streams` 数据仅用于展示。

- onFailure: 选传，函数类型，方法调用失败时执行的回调函数。

```
function(Err) {}
```
Err 为错误信息

<a name="client-leaveroom"></a>

### 3. leaveRoom 方法

离开房间，示例代码：

```
client.leaveRoom(LeaveRoomOptions, onSuccess, onFailure)
```

#### 参数说明

- LeaveRoomOptions，object 类型，选传，类型说明如下

```
{
  keepRecording: boolean  // 是否保持服务端录制，默认不保持。使用场景：课堂管理员开启房间内的流进行服务端录制后，不需要等待课堂结束即可直接退出房间，并使在房间内的流继续录制。
}
```

- onSuccess: function 类型，选传，方法调用成功时执行的回调函数，函数说明如下

```
function onSuccess() {}
```

- onFailure: 选传，函数类型，方法调用失败时执行的回调函数。

```
function(Err) {}
```
Err 为错误信息

<a name="client-publish"></a>

### 4. publish 方法

发布本地流，自 1.4.0 版本开始支持同时发布两条流（且摄像头，屏幕共享各一条，不可同时为同一类），示例代码：

```
client.publish(PublishOptions, onFailure)
```

#### 参数说明

- PublishOptions: object 类型，选传，类型说明如下

```
{
  audio: boolean          // 必填，指定是否使用麦克风设备。若传了 mediaStream 参数，将不再采集麦克风的音频，直接使用 mediaStream 中的音频。
  video: boolean          // 必填，指定是否使用摄像头设备。若传了 mediaStream 参数，将不再采集摄像头的视频，直接使用 mediaStream 中的视频；若传了 file 或 filePath 参数，将不再采集摄像头的视频，直接使用图片生成的视频。
  facingMode?: FacingMode // 选填，在移动设备上，可以设置该参数选择使用前置或后置摄像头，其中，FacingMode 为 'user'（前置摄像头）或 'environment'（后置摄像头），注：1. 请务必确定是在移动设备上设置该参数，否则可能会报 'OverConstrainedError［无法满足要求错误]' 的错误；2. 当在设备上使用前置摄像头时，设备（如苹果设备，以及没有设置摄像头为 "自拍镜像" 的 Android 设备）本地显示的图像是左右相反的（以 Y 轴对称），此时可为 video 元素添加样式 'transform: rotateY(180deg);' 来指定视频在本地显示的时候做镜像翻转。
  screen: boolean         // 必填，指定是否为屏幕共享，audio, video, screen 不可同时为 true，更不可同时为 false
  microphoneId?: string   // 选填，指定使用的麦克风设备的ID，可通过 getMicrophones 方法查询获得该ID，不填时，将使用默认麦克风设备
  cameraId?: string       // 选填，指定使用的摄像头设备的ID，可以通过 getCameras 方法查询获得该ID，不填时，将使用默认的摄像头设备
  extensionId?: string    // 选填，指定使用的 Chrome 插件的 extensionId，可使 72 以下版本的 Chrome 浏览器进行屏幕共享。
  mediaStream?: MediaStream  // 选填，允许用户发布自定义的媒体流
  file?: File             // 选填，发布时指定使用图片文件生成视频源，具体参数说明可参考 switchImage 接口
  filePath?: string       // 选填，发布时指定使用网络图片生成视频源，具体参数说明可参考 switchImage 接口
}
```

> 对于屏幕共享各浏览器兼容性，请参见 [getDisplayMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia) 。
> 特别地，使用 Chrome 浏览器屏幕共享 Tab（浏览器标签）页时，有分享 Tab 页中音频功能（分享弹出框左下脚勾选，Chrome 74 及以上版本可不用安装插件）。
>
> 此外，对于推流时所传参数的生效将采用此类优先级：mediaStream > file > filePath > video = screen；即用户指定媒体流（MediaStream）时，该媒体流将被发布，不再考虑其他情况生成的流；若指定了 file ，而没指定媒体流（MediaStream），那么将用 file 生成图片媒体流并被发布，依次类推。
> file 和 filePath 参数说明，请参见 [switchImage](#client-switchimage) 接口的参数说明。

- onFailure: 选传，函数类型，方法调用失败时执行的回调函数。

```
function(Error) {}
```
[Error](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error) 为错误信息

<a name="device-error"></a>

> 可能的错误名称（即 error.name）有：
>
> - AbortError［中止错误］ 尽管用户和操作系统都授予了访问设备硬件的权利，而且未出现可能抛出NotReadableError异常的硬件问题，但仍然有一些问题的出现导致了设备无法被使用。
> - NotAllowedError［拒绝错误］ 用户拒绝了当前的浏览器实例的访问请求；或者用户拒绝了当前会话的访问；或者用户在全局范围内拒绝了所有媒体访问请求。
> - NotFoundError［找不到错误］ 找不到满足请求参数的媒体类型。
> - NotReadableError［无法读取错误］ 尽管用户已经授权使用相应的设备，操作系统上某个硬件、浏览器或者网页层面发生的错误导致设备无法被访问。
> - OverConstrainedError［无法满足要求错误］ 指定的要求无法被设备满足。


<a name="client-unpublish"></a>

### 5. unpublish 方法

取消发布本地流，示例代码：

```
client.unpublish(StreamId, onSuccess, onFailure)
```

#### 参数说明
- StreamId: string 类型，选传，不传时，若仅有一条本地流，那么该流将被取消发布，若有两条本地流，那么最早发布的那条本地流将被取消发布

- onSuccess: function 类型，选传，方法调用成功时执行的回调函数，函数说明如下

```
function onSuccess(Stream) {}
```

函数参数 Stream 为返回值，object 类型，为流信息，类型说明见 [Stream](#stream)

- onFailure: 选传，函数类型，方法调用失败时执行的回调函数。

```
function(Err) {}
```
Err 为错误信息

<a name="client-subscribe"></a>

### 6. subscribe 方法

订阅远端流，注：订阅的远端流如果有音频时，可能存在播放问题，请查看 [关于浏览器的自动播放问题的说明及处理](./AutoPlay.md)
，示例代码：

```
client.subscribe(StreamId, onFailure)
```

#### 参数说明

- StreamId: string 类型，必传，为需要订阅的远端流的 sid

- onFailure: 选传，函数类型，方法调用失败时执行的回调函数。

```
function(Err) {}
```
Err 为错误信息


<a name="client-unsubscribe"></a>

### 7. unsubscribe 方法

取消订阅远端流，示例代码：

```
client.unsubscribe(StreamId, onSuccess, onFailure)
```

#### 参数说明

- StreamId: string 类型，必传，为需要订阅的远端流的 sid

- onSuccess: function 类型，选传，方法调用成功时执行的回调函数，函数说明如下

```
function onSuccess(Stream) {}
```

函数参数 Stream 为返回值，object 类型，为流信息，类型说明见 [Stream](#stream)

- onFailure: 选传，函数类型，方法调用失败时执行的回调函数。

```
function(Err) {}
```
Err 为错误信息


<a name="client-on"></a>

### 8. on 方法

给事件绑定监听函数，示例代码：

```
client.on(EventType, Listener)
```

#### 参数说明

- EventType: string 类型， 必传，目前有 'user-added' | 'user-removed' |
  'stream-added' | 'stream-removed' | 'stream-published' | 'stream-subscribed' |
  'mute-video' | 'unmute-video' | 'mute-audio' | 'unmute-audio' | 'screenshare-stopped' |
  'connection-state-change' | 'kick-off' | 'network-quality' | 'stream-reconnected' |
  'record-notify' | 'relay-notify' 这些事件可绑定监听函数
- Listener: function 类型，事件监听函数

  - 当事件类型为 'user-added' | 'user-removed' | 'kick-off' 时，可用 `function Listener(User) {}` 类型的函数，其中函数的参数类型见 [User](#user)
  - 当事件类型为 'stream-added' | 'stream-removed' | 'stream-published' | 'stream-subscribed' | 'mute-video' | 'unmute-video' | 'mute-audio' | 'unmute-audio' | 'screenshare-stopped' 时，可用 `function Listener(Stream) {}` 类型的函数，其中函数的参数类型见 [Stream](#stream)
  - 当事件类型为 'connection-state-change' 时，可用 `function Listener(States) {}` 类型的函数，函数的参数为 `{previous: State, current: State}`，其中 State 为 'OPEN' | 'CONNECTING' | 'CLOSING' | 'RECONNECTING' | 'CLOSED' 四种类型之一。
  - 当事件类型为 'network-quality' 时，可用 `function Listener(Stats) {}` 类型的函数，函数的参数为 `{uplink: Quality, downlink: Quality}`，其中，uplink 代表上行网络质量，downlink 代表下行网络质量，其值 Quality 为字符串，是 '0' | '1' | '2' | '3' | '4' | '5' | '6' 几种类型之一。
    - '0': 网络质量未知
    - '1': 网络质量优秀
    - '2': 网络质量良好
    - '3': 网络质量一般
    - '4': 网络质量较差
    - '5': 网络质量糟糕
    - '6': 网络连接断开
  - 当事件类型为 'stream-reconnected' 时，可用 `function Listener(Streams) {}` 类型的函数，函数的参数为 `{previous: Stream, current: Stream}`，其中 previous 是重连前的发布/订阅流，current 是重连后的发布/订阅流，请使用 current 来更新业务代码中的缓存。
  - 当事件类型为 'record-notify' 时，可用 `function Listener(Error, RecordResult) {}` 类型的函数，函数的参数为 Error 和 [RecordResult](#recordresult)，其中 Error 的 name 属性为服务端返回的错误码，message 属性为错误信息。Error 的 name 有以下可能的值：
    - '24149': 任务被停止，可能的原因有房间内没有任何流在推，或到存储服务器的连接已断开
    - '24150': 任务开启后10秒，如果收到这个消息，则表示任务开启失败
  - 当事件类型为 'relay-notify' 时，可用 `function Listener(Error, RelayResult) {}` 类型的函数，函数的参数为 Error 和 [RelayResult](#relayresult)，其中 Error 的 name 属性为服务端返回的错误码，message 属性为错误信息。Error 的 name 有以下可能的值：
    - '24149': 任务被停止，可能的原因有房间内没有任何流在推，或到推流地址（PushURL）的连接已断开
    - '24150': 任务开启后10秒，如果收到这个消息，则表示任务开启失败


#### 事件名解释：

事件名 | 描述
:--: | :--
user-added | 有其他用户加入房间
user-removed | 有其他用户离开房间
stream-added | 有其他用户发布了一条流，当收到此事件通知时，可调用 subscribe 方法订阅该流
stream-removed | 有其他用户取消发布了一条流
stream-published | 本地流已发布，可在页面中播放该流
stream-subscribed | 远端流已订阅，可在页面中播放该流
mute-video | 流的 video 被 mute
unmute-video | 流的 video 被取消 mute
mute-audio | 流的 audio 被 mute
unmute-audio | 流的 audio 被取消 mute
screenshare-stopped | 屏幕共享已被手动停止，当收到此事件通知时，需调用 unpublish 方法取消发布本地流
connection-state-change | 当 URTC client 与服务器的连接状态变化时，会由此事件通知。特别地，当因网络问题导致连接断开时，sdk 将在5-15秒内尝试自动重连，此时将收到内容为 `{previous: "OPEN", current: "RECONNECTING"}` 的通知，表示开始重连，若重连成功，将收到内容为 `{previous: "RECONNECTING", current: "OPEN"}` 的通知，若不能重连成功，将收到内容为 `{previous: "RECONNECTING", current: "CLOSED"}` 的通知，表示重连失败，此时需要依次调用 leaveRoom 和 joinRoom 以重新进入房间。`注意，断线重连后，对于已发布或订阅的流会触发下面的 stream-reconnected 流的重连事件，请处理该事件，对流进行重新播放`
kick-off | 当前用户被踢出了房间。URTC 限制了多设备同时登录，同一用户（userId）不可同时在多处加入房间，即当同一用户（userId）分别在利用两个设备（譬如电脑、手机等）先后加入房间时，前一个加入房间的设备将在后一个加入房间时收到此事件的通知，此时业务层可提示用户。
network-quality | 报告本地用户的上下行网络质量。每 1 秒触发一次，报告本地用户当前的上行和下行网络质量。`该功能目前处于实验阶段，网络质量评分仅供参考。部分浏览器无法获取网络质量数据，评分仅有1，6两值，如 Edge 18 等。`
stream-reconnected | 当发布/订阅流断开时，会自动重连，发布流会被重新发布，订阅流会被重新订阅，完成后会触发此事件，请注意在此事件的回调函数中更新业务代码中的缓存


<a name="client-off"></a>

### 9. off 方法

解除绑定事件的监听函数，示例代码：

```
client.off(EventType, Listener)
```

#### 参数说明

- EventType: 参见 on 方法
- Listener: 为调用 on 方法时绑定的监听函数

<a name="client-play"></a>

### 10. play 方法

播放一条流的音视频，示例代码：

```
client.play(PlayOptions, callback)
```

#### 参数说明

- PlayOptions: object 类型，必传，详细类型说明如下

```
{
  streamId: string,   // 必填，发布/订阅流的 ID，特别地，对于调用预览方法时的视频，可通过填写 'preview' 进行播放
  container: HTMLElement | string,  // 必填，指定音视频嵌入的容器元素，或该容器元素的 ID，容器元素一般为一个指定了宽高的 div 元素
  mute?: boolean,     // 选填，是否进行静音播放，注：由于部分浏览器的限制，播放带声音的音视频时，必须以手势触发，但也可以通过进行静音播放来绕过此限制，此处设置 mute 为 true 时，即为静音播放。不填时，默认为 false
  mirror?: boolean,   // 选填，播放视频时是否进行镜像翻转，特别地，在播放本地流，且发布本地流时指定的为前置摄像头时，将不受此项影响，直接为镜像翻转。不填时，默认为 false
  fit?: VideoFitType  // 选填，指定视频播放时的显示模式，VideoFitType 值为 'cover' | 'contain' 两种
  controls?: "auto" | "show" | "hide" // 选填，设置播放时内部使用的 <audio> 或 <video> 元素的控制面板的显示或隐藏。"show" 为一直显示，"hide" 为一直隐藏，"auto" 为正常播放时隐藏，没播放时显示，默认为 "auto"
}
```

> 关于 VideoFitType 的说明：
> 1. cover 模式：优先保证容器被填满。视频尺寸等比缩放，直至整个容器被视频填满。如果视频长宽与容器不同，则视频流会按照容器的比例进行周边裁剪或图像拉伸后填满容器。
> 2. contain 模式：优先保证视频内容全部显示。视频尺寸等比缩放，直至视频窗口的一边与容器边框对齐。
> 播放视频流默认使用 cover 模式，屏幕共享默认使用 contain 模式。

- callback: function 类型，选传，方法的回调函数，函数说明如下

```
function callback(Error) {}
```
Error 为返回值，为空（undefined) 时，说明已执行成功，否则执行失败，此时，播放元素将会打开控制面板，显示播放按钮等操作工具。

> 注：受浏览器策略影响，在 Chrome 70+ 和 Safari 浏览器上，该方法必须由用户手势触发，请查看 [关于浏览器的自动播放问题的说明及处理](./AutoPlay.md)。

<a name="client-resume"></a>

### 11. resume 方法

恢复一条流的音视频播放，该方法一般在调用 play 失败后，提示用户进行手势触发之后调用（该方法需用手势触发）。 示例代码：

```
client.resume(StreamId, callback)
```

#### 参数说明

- StreamId: string 类型，必传，指流的 ID，特别地，恢复播放的流为预览的流时，可传 'preview'。

- callback: function 类型，选传，方法的回调函数，函数说明如下

```
function callback(Error) {}
```
Error 为返回值，为空（undefined) 时，说明已执行成功，否则执行失败，此时，播放元素将会打开控制面板，显示播放按钮等操作工具。

<a name="client-muteaudio"></a>

### 12. muteAudio 方法

关闭流的音频，示例代码：

```
const result = client.muteAudio(StreamId)
```

#### 参数说明

- StreamId: string 类型，选传，指流的 ID

> 注：StreamId 不传时，为 mute 第一条发布流的音频，并会通知到其他用户；传时，为 mute StreamId 对应的发布或订阅流的音频，若为订阅流时，只是影响到本地订阅的流的音频，并不是指远端流推送或不推送音频。

#### 返回值说明

- result: boolean 类型，成功时为 true，失败时为 false


<a name="client-unmuteaudio"></a>

### 13. unmuteAudio 方法

启用流的音频，示例代码：

```
const result = client.unmuteAudio(StreamId)
```

#### 参数说明

- StreamId: string 类型，选传，指流的 ID

> 注：StreamId 不传时，为 unmute 第一条发布流的音频，并会通知到其他用户；传时，为 unmute StreamId 对应的发布或订阅流的音频，若为订阅流时，只是影响到本地订阅的流的音频，并不是指远端流推送或不推送音频。

#### 返回值说明

- result: boolean 类型，成功时为 true，失败时为 false


<a name="client-mutevideo"></a>

### 14. muteVideo 方法

关闭流的视频，示例代码：

```
const result = client.muteVideo(StreamId)
```

- StreamId: string 类型，选传，指流的 ID

> 注：StreamId 不传时，为 mute 第一条发布流的视频，并会通知到其他用户；传时，为 mute 对应的发布或订阅流的视频，若为订阅流时，只是影响到本地订阅的流的视频，并不是指远端流推送或不推送视频。

#### 返回值说明

- result: boolean 类型，成功时为 true，失败时为 false


<a name="client-unmutevideo"></a>

### 15. unmuteVideo 方法

启用流的视频，示例代码：

```
const result = client.unmuteVideo(StreamId)
```

- StreamId: string 类型，选传，指流的 ID

> 注：StreamId 不传时，为 unmute 发布流的视频，并会通知到其他用户；传时，为 unmute 对应的发布或订阅流的视频，若为订阅流时，只是影响到本地订阅的流的视频，并不是指远端流推送或不推送视频。

#### 返回值说明

- result: boolean 类型，成功时为 true，失败时为 false


<a name="client-startrecording"></a>

### ~~startRecording 方法 - 已废弃~~

#### 开启录制，请使用 [startRecord](#client-startrecord)

```
client.startRecording(RecordOptions, onSuccess, onFailure)
```

#### 参数说明

- RecordOptions: object 类型，必传，录制的配置信息，类型说明如下

```
{
  bucket: string  // 必传，存储的 bucket, URTC 使用 UCloud 的 UFile 产品进行在存储，相关信息见控制台操作文档
  region: string  // 必传，存储服务所在的地域
  uid?: string,                         // 选传，指定某用户的流作为主画面，不传时，默认为当前开启录制的用户的流作为主画面
  mainViewType?: 'screen' | 'camera',   // 选传，指定主画面使用的流的媒体类型（当同一用户推多路流时），不传时，默认使用 camera
  mixStream?: MixStreamOptions // 选传，混流的相关配置，无混流时，不用填写
  waterMark?: WaterMarkOptions // 选传，水印的相关配置，不需要添加水印时，不用填写
  relay?: RelayOptions         // 选传，转推相关配置，不需要转推时，不用填写
}
```

WaterMarkOptions: object 类型，选传，添加的水印相关配置，类型说明如下

```
{
  position?: 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom' // 选传，指定水印的位置，前面四种类型分别对应 左上，左下，右上，右下，默认 'left-top'
  type?: 'time' | 'image' | 'text' // 选传，水印类型，分别对应时间水印、图片水印、文字水印，默认为 'time'
  remarks?:  string,   // 选传，水印备注，当为时间水印时，传空字符串，当为图片水印时，此处需为图片的 URL（此时必传），当为文字水印时，此处需为水印文字
}
```

MixStreamOptions: object 类型，选传，混流相关配置，类型说明如下

```
{
  width?: number,      // 选传，设置混流后视频的宽度，不传时，默认为 1280
  height?: number,     // 选传，设置混流后视频的高度，不传时，默认为 720
  template?: number,   // 选传，指定混流布局模板，可使用 1-9 对应的模板，默认为 1
  isAverage?: boolean, // 选传，是否均分，均分对应平铺风格，不均分对应垂直风格，默认为 true
}
```

RelayOptions: object 类型，选传，转推相关配置，类型说明如下

```
{
  time?: number,        // 转推开启时间的Unix时间戳（单位：秒），不填时，将默认使用当前时间的Unix时间戳
  fragment: number,     // 切片大小（单位：秒），默认 60s
}
```

- onSuccess: function 类型，选传，方法调用成功时执行的回调函数，函数说明如下

```
function onSuccess(Record) {}
```

函数参数 Record 为返回值，object 类型，为流信息，类型说明如下

```
{
  FileName: string  // 录制到的文件的名称
  RecordId: string  // 录制 ID
}
```

- onFailure: 选传，函数类型，方法调用失败时执行的回调函数。

```
function(Err) {}
```
Err 为错误信息


<a name="client-stoprecording"></a>

### ~~stopRecording 方法 - 已废弃~~

#### 结束录制，请使用 [stopRecord](#client-stoprecord)

```
client.stopRecording(onSuccess, onFailure)
```

#### 参数说明

- onSuccess: function 类型，选传，方法调用成功时执行的回调函数，函数说明如下

```
function onSuccess() {}
```

- onFailure: 选传，函数类型，方法调用失败时执行的回调函数。

```
function(Err) {}
```
Err 为错误信息


<a name="client-getuser"></a>

### 16. getUser 方法

获取本地用户的信息，示例代码：

```
const result = client.getUser()
```

#### 返回值说明

- result: User 类型，类型说明如下

<a name='user'></a>

User:

```
{
  uid: string   // 为用户ID
}
```


<a name="client-getusers"></a>

### 17. getUsers 方法

获取当前加入房间的远端用户的信息，示例代码：

```
const result = client.getUsers()
```

#### 返回值说明

- result: User 类型的数组，User 类型说明见 [User](#user)


<a name="client-getstream"></a>

### 18. getStream 方法

获取单条发布（本地）/订阅（远端）流的信息，示例代码：

```
const result = client.getStream(StreamId)
```

#### 参数说明

- StreamId: string 类型，选传，流的 ID，当不传时，默认返回第一条发布流（当有两条发布流时）

#### 返回值说明

- result: Stream 类型或 undefined（未找到对应流），Stream 类型说明如下

<a name='stream'></a>

Stream:

```
{
  sid: string                     // 流ID
  uid: string                     // 对应的用户的ID
  type: 'publish' | 'subscribe'   // 流类型，分别为 publish 和 subscribe 两种，
  video: boolean                  // 是否包含音频
  audio: boolean                  // 是否包含视频
  muteAudio: boolean              // 音频轨道是否禁用
  muteVideo: boolean              // 视频轨道是否禁用
  mediaType?: 'camera' | 'screen' // 流的媒体类型，目前存在两种媒体类型 'camera' 及 'screen'，同一用户可发布的各类型的流只能存在一个，以此来区分不同媒体类型的发布/订阅流
  mediaStream?: MediaStream       // 使用的媒体流，可用 HTMLMediaElement 进行播放，此属性的值可能为空，当流被正常发布或订阅流，此值有效
}
```


<a name="client-getlocalstreams"></a>

### 19. getLocalStreams 方法

获取所有发布（本地）流的信息（ 1.4.0 及以上版本支持），示例代码：

```
const result = client.getLocalStreams()
```

#### 返回值说明

- result: Stream 类型的数组，Stream 类型说明见 [Stream](#stream)

<a name="client-getremotestreams"></a>

### 20. getRemoteStreams 方法

获取所有订阅流（远端流）的信息（ 1.4.0 及以上版本支持），示例代码：

```
const result = client.getRemoteStreams()
```

#### 返回值说明

- result: Stream 类型的数组，Stream 类型说明见 [Stream](#stream)

<a name="client-getstreams"></a>

### ~~getStreams 方法 - 已废弃~~

获取订阅流（远端流）的信息，1.4.0 及以上版本请使用 [getRemoteStreams](#client-getremotestreams)


<a name="client-getmediastream"></a>

### 21. getMediaStream 方法

获取发布（本地）/ 订阅（远端）流对应的媒体流（ 1.4.0 及以上版本支持），获取后，可通过 HtmlMediaElement（如：[video](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video)）进行播放，建议直接利用 HtmlMediaElement 对本地流进行播放时，需将 HtmlMediaElement 的 muted 属性设为 true，否则会听到自己的声音，感觉像回音，示例代码：

```
const result = client.getMediaStream(StreamId)
```

#### 参数说明

- StreamId: string 类型，选传，流的 ID，当不传时，默认返回第一条发布流（当有两条发布流时），传时，返回 StreamId 对应的发布或订阅流的的媒体流

#### 返回值说明

- result: MediaStream 类型，类型说明见 [MediaStream](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream)


<a name="client-getlocalmediastream"></a>

### ~~getLocalMediaStream 方法 - 已废弃~~

获取发布流对应的媒体流，1.4.0 及以上版本请使用 [getMediaStream](#client-getmediastream)


<a name="client-getremotemediastream"></a>

### ~~getRemoteMediaStream 方法 - 已废弃~~

获取订阅流对应的媒体流，1.4.0 及以上版本请使用 [getMediaStream](#client-getmediastream)


<a name="client-getmicrophones"></a>

### 22. getMicrophones 方法

获取麦克风设备，示例代码：

> 注：若站点未经过用户授权浏览器使用麦克风设备，会弹出提示要求用户进行授权

```
client.getMicrophones(onSuccess, onFailure)
```

#### 参数说明

- onSuccess: function 类型，选传，方法调用成功时执行的回调函数，函数说明如下

```
function onSuccess(MediaDeviceInfos) {}
```

函数参数 MediaDeviceInfos 为返回值，为 MediaDeviceInfo 类型的数组，点击 [MediaDeviceInfo](https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo) 查看 MediaDeviceInfo 详情


- onFailure: 选传，函数类型，方法调用失败时执行的回调函数。

```
function(Err) {}
```
Err 为错误信息


<a name="client-getcameras"></a>

### 23. getCameras 方法

获取摄像头设备，示例代码：

> 注：若站点未经过用户授权浏览器使用摄像头设备，会弹出提示要求用户进行授权

```
client.getCameras(onSuccess, onFailure)
```

#### 参数说明

- onSuccess: function 类型，选传，方法调用成功时执行的回调函数，函数说明如下

```
function onSuccess(MediaDeviceInfos) {}
```

函数参数 MediaDeviceInfos 为返回值，为 MediaDeviceInfo 类型的数组，点击 [MediaDeviceInfo](https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo) 查看 MediaDeviceInfo 详情


- onFailure: 选传，函数类型，方法调用失败时执行的回调函数。

```
function(Err) {}
```
Err 为错误信息


<a name="client-getloudspeakers"></a>

### 24. getLoudspeakers 方法

获取音响/声音输出设备，示例代码：

> 注：若站点未经过用户授权浏览器使用音频设备，会弹出提示要求用户进行授权

```
client.getLoudspeakers(onSuccess, onFailure)
```

#### 参数说明

- onSuccess: function 类型，选传，方法调用成功时执行的回调函数，函数说明如下

```
function onSuccess(MediaDeviceInfos) {}
```

函数参数 MediaDeviceInfos 为返回值，为 MediaDeviceInfo 类型的数组，点击 [MediaDeviceInfo](https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo) 查看 MediaDeviceInfo 详情


- onFailure: 选传，函数类型，方法调用失败时执行的回调函数。

```
function(Err) {}
```
Err 为错误信息


<a name="client-setvideoprofile"></a>

### 25. setVideoProfile 方法

设置视频的 profile（通过getSupportProfileNames获取到视频质量的值，不设置时，默认为 "640\*480"）限制 client 使用的视频大小、帧率、带宽等，setVideoProfile须在publish之前设置。示例代码：

```
client.setVideoProfile(Profile, onSuccess, onFailure)
```

#### 参数说明

- onSuccess: function 类型，选传，方法调用成功时执行的回调函数，函数说明如下

```
function onSuccess() {}
```

- onFailure: 选传，函数类型，方法调用失败时执行的回调函数。

```
function(Err) {}
```
Err 为错误信息


<a name="client-switchdevice"></a>

### 26. switchDevice 方法

当发布（本地麦克风、摄像头）流已经发布，可通过此方法在不中断当前发布的情况下，用指定的音视频设备采集的音视频流代替正在发布的音视频流，示例代码：

```
client.switchDevice(SwitchDeviceOptions, onSuccess, onFailure)
```

#### 参数说明

- SwitchDeviceOptions: object 类型，必传，详细类型说明如下

```
{
  streamId?: string       // 选填，发布（本地）流的 ID，不填时，为第一条发布流
  type: 'audio' | 'video' // 必填，指定音频或视频设备
  deviceId: string        // 必填，设备 ID
}
```

- onSuccess: function 类型，选传，方法调用成功时执行的回调函数，函数说明如下

```
function onSuccess() {}
```
- onFailure: 选传，函数类型，方法调用失败时执行的回调函数。

```
function(Err) {}
```
Err 为错误信息

> 可能的错误信息有：[参见](#device-error)


<a name="client-switchscreen"></a>

### 27. switchScreen 方法

当屏幕共享流已经发布，可通过此方法在不中断当前发布的情况下，用屏幕共享来代替正在发布的屏幕共享流，示例代码：

```
client.switchScreen(StreamId, onSuccess, onFailure)
```

#### 参数说明

- StreamId: string 类型，选传，不传时，为第一条发布流（请确保第一条发布为屏幕共享流）

- onSuccess: function 类型，选传，方法调用成功时执行的回调函数，函数说明如下

```
function onSuccess() {}
```
- onFailure: 选传，函数类型，方法调用失败时执行的回调函数。

```
function(Err) {}
```
Err 为错误信息


<a name="client-switchimage"></a>

### 28. switchImage 方法

当本地流已经发布，可通过此方法在不中断当前发布的情况下，用静态图片来代替正在发布的视频流，示例代码：

```
client.switchImage(SwitchImageOptions, onSuccess, onFailure)
```

#### 参数说明

- SwitchImageOptions: object 类型，必传，详细类型说明如下

```
{
  streamId?: string       // 选填，发布（本地）流的 ID，不填时，为第一条发布流
  file?: File             // 选填，指（图片）文件，更多请参考下面的备注
  filePath?: string       // 选填，指图片文件的网络路径（URL)，支持以下图片格式：PNG，JPEG 以及浏览器支持的其他图片格式，注：当图片文件为其他站点的网络文件时，可能会有跨域访问问题
}
```

> 注：
> 1. file 和 filePath 两者不可同时为空，至少填一项。特别地，若都填时，将优先使用 file 的值。
> 2. file 请参考 [File 对象](https://developer.mozilla.org/zh-CN/docs/Web/API/File)，一般可通过 `<input type="file" accept="image/*"></input>` 来上传来获取

- onSuccess: function 类型，选传，方法调用成功时执行的回调函数，函数说明如下

```
function onSuccess() {}
```
- onFailure: 选传，函数类型，方法调用失败时执行的回调函数。

```
function(Err) {}
```
Err 为错误信息


<a name="client-getaudiovolume"></a>

### 29. getAudioVolume 方法

获取音频的音量，返回值范围 [0,100]，示例代码：

```
client.getAudioVolume(StreamId)
```

#### 参数说明

- StreamId: string 类型，选传，本地或远端流的 ID 即 [Stream](#stream) 的 sid 属性值，当不传时，默认获取第一条本地流的音量大小

<a name="client-setaudiovolume"></a>

### 30. setAudioVolume 方法

设置音频的音量，可设置的音量范围 [0,100]，示例代码：

```
client.setAudioVolume(AudioVolumeOptions, callback)
```

#### 参数说明

- AudioVolumeOptions: object 类型，必传，详细类型说明如下

```
{
  streamId?: string   // 选填，发布/订阅流的 ID，不填时，为第一条发布流
  element?: HTMLMediaElement // 仅当为订阅（远端）流，且通过直接将 mediaStream 赋值给 element.srcObject 属性进行播放时必填该 element。若为发布（本地）流，或通过 play 方法进行播放的订阅（远端）流时，不需要填写。
  volume: number      // 必填，音量大小，取值范围 [0, 100]
}
```

- callback: function 类型，选传，方法的回调函数，函数说明如下

```
function callback(Err) {}
```
Err 为返回值，为空时，说明已执行成功，否则执行失败，值为执行失败的错误信息


<a name="client-getaudiostats"></a>

### 31. getAudioStats 方法

获取流的音频状态，示例代码：

```
client.getAudioStats(StreamId, onSuccess, onFailure)
```

#### 参数说明

- StreamId: string 类型，选传，本地或远端流的 ID 即 [Stream](#stream) 的 sid 属性值，当不传时，默认获取第一条本地流的音频状态
  
- onSuccess: function 类型，选传，方法调用成功时执行的回调函数，函数说明如下

```
function onSuccess(AudioStats) {}
```
函数参数 AudioStats 为返回值，为 object 类型，类型说明如下：

```
{
  br: number        // 码率
  lostpre: number   // 丢包率
  vol: number       // 声音大小
  mime: string      // 编码格式，固定为 opus
}
```

- onFailure: 选传，函数类型，方法调用失败时执行的回调函数。

```
function(Err) {}
```
Err 为错误信息


<a name="client-getvideostats"></a>

### 32. getVideoStats 方法

获取流的视频状态，示例代码：

```
client.getVideoStats(StreamId, onSuccess, onFailure)
```

#### 参数说明

- StreamId: string 类型，选传，本地或远端流的 ID 即 [Stream](#stream) 的 sid 属性值，当不传时，默认获取第一条本地流的视频状态
  
- onSuccess: function 类型，选传，方法调用成功时执行的回调函数，函数说明如下

```
function onSuccess(VideoStats) {}
```
函数参数 VideoStats 为返回值，为 object 类型，类型说明如下：

```
{
  br: number        // 码率
  lostpre: number   // 丢包率
  frt: number       // 帧率
  w: number         // 视频宽度
  h: number         // 视频高度
  mime: string      // 编码格式，'vp8' 或 'h264'
}
```

- onFailure: 选传，函数类型，方法调用失败时执行的回调函数。

```
function(Err) {}
```
Err 为错误信息


<a name="client-getnetworkstats"></a>

### 33. getNetworkStats 方法

获取流的网络状态，示例代码：

```
client.getNetworkStats(StreamId, onSuccess, onFailure)
```

#### 参数说明

- StreamId: string 类型，可选，本地或远端流的 ID 即 [Stream](#stream) 的 sid 属性值，当不传时，默认获取第一条本地流的网络状态
  
- onSuccess: function 类型，选传，方法调用成功时执行的回调函数，函数说明如下

```
function onSuccess(NetworkStats) {}
```
函数参数 NetworkStats 为返回值，为 object 类型，类型说明如下：

```
{
  rtt: number   //  往返时延，单位 ms
}
```

- onFailure: 选传，函数类型，方法调用失败时执行的回调函数。

```
function(Err) {}
```
Err 为错误信息

<a name="client-preloadeffect"></a>

### 34. preloadEffect 方法

预加载音效资源，示例代码：

```
client.preloadEffect(EffectId, FilePath, callback)
```

#### 参数说明

- EffectId: number 类型，必传，指音效资源 ID，须唯一，用于区分不同的音效资源

- FilePath: string 类型，必传，指音效文件的路径（URL)，支持以下音频格式：MP3，AAC 以及浏览器支持的其他音频格式。此外，音效文件不应过大，否则可能会影响通信的流畅性，注：当音效文件为其他站点的网络文件时，可能会有跨域访问问题

- callback: function 类型，选传，方法的回调函数，函数说明如下

```
function callback(Err) {}
```
Err 为返回值，为空时，说明已执行成功，否则执行失败，值为执行失败的错误信息

<a name="client-unloadeffect"></a>

### 35. unloadEffect 方法

卸载音效资源，示例代码：：

```
client.unloadEffect(EffectId)
```

#### 参数说明

- EffectId: number 类型，必传，指音效资源 ID，须唯一，用于区分不同的音效资源

<a name="client-playeffect"></a>

### 36. playEffect 方法

播放音效，示例代码：

```
client.playEffect(EffectOptions, callback)
```

#### 参数说明

<a name='effectoptions'></a>

- EffectOptions: object 类型，必传，详细类型说明如下

```
{
  streamId?: string   // 选填，发布（本地）流的 ID，不填时，为第一条发布流
  effectId: number    // 必填，音效资源 ID
  filePath?: string   // 选填，音效文件的路径，当音效文件已经使用 preloadEffect 进行预加载后，可不填此项
  loop?: boolean      // 选填，是否循环播放音效，默认不循环
  playTime?: number   // 选填，音效从 playTime 秒处开始播放，默认为0，即从头开始
  replace?: boolean   // 选填，是否替换当前音轨，即只使用音效，不混音，默认不替换
}
```

- callback: function 类型，选传，方法的回调函数，函数说明如下

```
function callback(Err) {}
```
Err 为返回值，为空时，说明已执行成功，否则执行失败，值为执行失败的错误信息

<a name="client-pauseeffect"></a>

### 37. pauseEffect 方法

暂停播放音效，示例代码：

```
client.pauseEffect(EffectOptions, callback)
```

#### 参数说明

- EffectOptions: object 类型, 必传，详细的类型说明如下

```
{
  streamId?: string   // 选填，发布（本地）流的 ID，不填时，为第一条发布流
  effectId: number    // 必填，音效资源 ID
}
```

- callback: function 类型，选传，方法的回调函数，函数说明如下

```
function callback(Err) {}
```
Err 为返回值，为空时，说明已执行成功，否则执行失败，值为执行失败的错误信息

<a name="client-resumeeffect"></a>

### 38. resumeEffect 方法

恢复播放音效，示例代码：

```
client.resumeEffect(EffectOptions, callback)
```

#### 参数说明

- EffectOptions: object 类型, 必传，详细的类型说明如下

```
{
  streamId?: string   // 选填，发布（本地）流的 ID，不填时，为第一条发布流
  effectId: number    // 必填，音效资源 ID
}
```

- callback: function 类型，选传，方法的回调函数，函数说明如下

```
function callback(Err) {}
```
Err 为返回值，为空时，说明已执行成功，否则执行失败，值为执行失败的错误信息


<a name="client-stopeffect"></a>

### 39. stopEffect 方法

停止播放音效，示例代码：

```
client.stopEffect(EffectOptions, callback)
```

#### 参数说明

- EffectOptions: object 类型, 必传，详细的类型说明如下

```
{
  streamId?: string   // 选填，发布（本地）流的 ID，不填时，为第一条发布流
  effectId: number    // 必填，音效资源 ID
}
```

- callback: function 类型，选传，方法的回调函数，函数说明如下

```
function callback(Err) {}
```
Err 为返回值，为空时，说明已执行成功，否则执行失败，值为执行失败的错误信息

<a name="client-seteffectvolume"></a>

### 40. setEffectVolume 方法

设置正在播放的音效的音量大小，示例代码：

```
client.setEffectVolume(EffectVolumeOptions, callback)
```

#### 参数说明

- EffectVolumeOptions: object 类型, 必传，详细的类型说明如下

```
{
  streamId?: string   // 选填，发布（本地）流的 ID，不填时，为第一条发布流
  effectId: number    // 必填，音效资源 ID
  volume: number      // 必填，音量大小，取值范围 [0, 100]
}
```

- callback: function 类型，选传，方法的回调函数，函数说明如下

```
function callback(Err) {}
```
Err 为返回值，为空时，说明已执行成功，否则执行失败，值为执行失败的错误信息

<a name="client-snapshot"></a>

### 41. snapshot 方法

可将指定的发布（本地）/订阅（远端）流截屏用于页面展示，或下载截屏图片，示例代码：

```
client.snapshot(SnapshotOptions, onSuccess, onFailure);
```

> 注：为保证 API 的易用性，此 API 自 1.4.0 版本进行了重新设计，由于无法做到向前（ 1.3.7 - 1.3.10 版本）兼容，请使用 1.3.7 - 1.3.10 版本的用户调整调用方式。

#### 参数说明

- SnapshotOptions: object 类型，选传，详细的类型说明如下

```
{
  streamId?: string             // 选填，发布/订阅流的 ID，不填时，为第一条发布流，
  download?: boolean 或 string  // 选填，是否要下载图片，或指定下载图片的文件名，传 true 时，可将截屏下载到本地（文件名自动生成），传非空字符串时，将会以该字符串命名下载时保存到本地的图片名，不传或传 false 或空字符串时，都将不下载图片
}
```

- onSuccess: function 类型，选传，方法调用成功时执行的回调函数，函数说明如下

```
function onSuccess(ImgString) {}
```

ImgString: string 类型，是图片转化的 base64 编码的 [Data URLs](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/data_URIs)，可将其赋值给 Image 元素 - 详见 [HTMLImageElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement) 的 src 属性。


- onFailure: 选传，函数类型，方法调用失败时执行的回调函数。

```
function(Err) {}
```
Err 为错误信息

<a name="client-startpreviewing"></a>

### 42. startPreviewing 方法

启动预览，示例代码：

```
client.startPreviewing(DeviceOptions, onSuccess, onFailure);
```

#### 参数说明

- DeviceOptions: object 类型，选传，详细的类型说明如下

```
{
  audio: boolean          // 必填，指定是否使用麦克风设备
  video: boolean          // 必填，指定是否使用摄像头设备
  facingMode?: FacingMode // 选填，在移动设备上，可以设置该参数选择使用前置或后置摄像头，其中，FacingMode 为 'user'（前置摄像头）或 'environment'（后置摄像头）
  microphoneId?: string   // 选填，指定使用的麦克风设备的ID，可通过 getMicrophones 方法查询获得该ID，不填时，将使用默认麦克风设备
  cameraId?: string       // 选填，指定使用的摄像头设备的ID，可以通过 getCameras 方法查询获得该ID，不填时，将使用默认的摄像头设备
}
```

- onSuccess: function 类型，选传，方法调用成功时执行的回调函数，函数说明如下

```
function onSuccess(result) {}
```

- result: MediaStream 类型，类型说明见 [MediaStream](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream)，可通过 HtmlMediaElement（如：[video](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video)）进行播放

- onFailure: 选传，函数类型，方法调用失败时执行的回调函数。

```
function(Err) {}
```

Err 为错误信息

> 可能的错误信息有：[参见](#device-error)


<a name="client-stoppreviewing"></a>

### 43. stopPreviewing 方法

停止预览，示例代码：

```
client.stopPreviewing();
```

<a name="client-devicedetection"></a>

### ~~deviceDetection 方法 - 已转移~~

此 API 已转移至 UCloudRTC 中，详见 [UCloudRTC.deviceDetection](#devicedetection)


<a name="client-replacetrack"></a>

### 44. replaceTrack 方法

替换发布流的音频轨道或视频轨道，可在保持发布流的发布状态下，切换音频或视频，示例代码：

```
client.replaceTrack(ReplaceTrackOptions, callback)
```

#### 参数说明

- ReplaceTrackOptions: object 类型, 必传，详细的类型说明如下

```
{
  streamId?: string   // 选填，发布（本地）流的 ID，不填时，为第一条发布流
  track: MediaStreamTrack   // 必填，需要替换的新的音轨或视轨，MediaStreamTrack 参见下面注释
  retain?: boolean    // 选填，是否需要保持被替换的老的音轨或视轨可用，一般情况下，如果后面需要切换回老的音轨或视轨，建议保持其可用，否则可不用保持
}
```

> MediaStreamTrack 类型，类型说明见 [MediaStreamTrack](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaStreamTrack)

- callback: function 类型，选传，方法的回调函数，函数说明如下

```
function callback(Err, OldTrack) {}
```
Err 为返回值，为空时，说明已执行成功，否则执行失败，值为执行失败的错误信息

OldTrack 为返回值，MediaStreamTrack 类型，不为空时，值为被替换的音频轨道或视频轨道

<a name="client-startmix"></a>

### ~~startMix 方法 - 已废弃~~

#### 开启录制，请使用 [startRecord](#client-startrecord)，开启转推，请使用 [startRelay](#client-startrelay)

```
client.startMix(MixOptions, callback)
```

#### 参数说明

- MixOptions: object 类型, 必传，详细的类型说明如下

```
{
  type?: MixType  // 选传，MixType 为 'relay' | 'record' | 'relay-and-record' | 'update-config' 其中之一，分别代表 '转推' | '录制' | '录制并转推' | '更改设置'，不传时，默认为 'record' 录制。
  bucket?: string  // 当 type 为 '录制' 和 '录制并转推时'，必传，存储的 bucket, URTC 使用 UCloud 的 UFile 产品进行在存储，相关信息见控制台操作文档
  region?: string  // 当 type 为 '录制' 和 '录制并转推时'，必传，存储服务所在的地域

  pushURL?: string[]          // 当 type 为 '转推' 和 '录制并转推时'，必传，为转推的 URL 的列表
  layout?: MixLayoutOptions   // 选传，录制/转推后的视频的布局设置，类型说明见下面的 MixLayoutOptions 类型，不传时，将使用默认值
  audio?: MixAudioOptions     // 选传，录制/转推后的音频的设置，类型说明见下面的 MixAudioOptions 类型，不传时，将使用默认值
  video?: MixVideoOptions     // 选传，录制/转推后的视频的设置，类型说明见下面的 MixVideoOptions 类型，不传时，将使用默认值

  width?: number      // 选传，录制转推后的视频的宽度，不传时，默认为 1280
  height?: number     // 选传，录制转推后的视频的高度，不传时，默认为 720
  backgroundColor?: BackgroundColorOptions  // 选传，背景色，类型说明见下面的 BackgroundColorOptions 类型，不传时，默认为 #000 黑色

  waterMark?: WaterMarkOptions  // 选传，水印设置，类型说明见下面的 WaterMarkOptions 类型，不传时将不添加水印

  streams?: MixStream[]         // 选传，指定需要混合的流，类型说明见下面的 MixStream 类型
}
```

MixLayoutOptions 类型，类型说明

```
{
  type: MixLayoutType           // MixLayoutType 为 'flow' | 'main' | 'custom'，分别代表：1 平铺风格，流式(均分)布局；2 垂直风格，讲课模式，主讲人占大部分屏幕，其他人小屏居于底部；3 自定义布局；4 模板自适应一；5 模板自适应二；6 单画面；默认为 'flow'
  custom?: Object[]             // type 为 'custom'时，自定义布局填在custom里，格式参照RFC5707 Media Server Markup Language (MSML)
  mainViewUId?: string          // 指定某用户的流为主画面，默认为当前用户
  mainViewType?: MainViewType   // 主画面类型，'screen' | 'camera'，默认为用户发布的 'camera'
}
```

MixAudioOptions 类型，类型说明

```
{
  codec: MixAudioCodec    // 音频的编码格式，MixAudioCodec 为 'aac'，不传时默认为 'aac'
}
```

MixVideoOptions 类型，类型说明

```
{
  codec: MixVideoCodec    // 视频的编码格式，MixVideoCodec 为 'h264' | 'h265' 其中之一，默认为 'h264'
  quality?: H264Quality   // 视频质量，当 codec 为 h264 时，此项起作用，H264Quality 为 'B' | 'CB' | 'M' | 'E' | 'H' 其中之一，默认为 'CB'
  frameRate?: number      // 视频码率，可选值 6 | 12 | 15 | 24 | 30 | 48 | 60，默认为 15
  bitRate?: number        // 视频比特率，默认为 500
}
```

BackgroundColorOptions 类型，类型说明

```
{
  r: number   // r 通道值，默认为 0
  g: number   // g 通道值，默认为 0
  b: number   // b 通道值，默认为 0
}
```

WaterMarkOptions: object 类型，选传，添加的水印相关配置，类型说明如下

```
{
  position?: 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom' // 选传，指定水印的位置，前面四种类型分别对应 左上，左下，右上，右下，默认 'left-top'
  type?: 'time' | 'image' | 'text' // 选传，水印类型，分别对应时间水印、图片水印、文字水印，默认为 'time'
  remarks?:  string,   // 选传，水印备注，当为时间水印时，传空字符串，当为图片水印时，此处需为图片的 URL（此时必传），当为文字水印时，此处需为水印文字
}
```

MixStream: object 类型，选传，添加的水印相关配置，类型说明如下

```
{
  uid: string,        // 用户 ID，指定需要混合的流的用户ID（远端用户）
  mediaType: string   // 流的媒体类型，指定需要混合的流的媒体类型，有 'camera' 和 'screen' 两种可选，默认为 'camera'
}
```

- callback: function 类型，选传，方法的回调函数，函数说明如下

```
function callback(Error, Result) {}
```
Error 为返回值，为空时，说明已执行成功，否则执行失败，值为执行失败的错误信息

Result 为返回值，[MixResult 类型](#mixresult)，执行失败时，此值为空，执行成功时，此值为执行结果

<a name="mixresult"></a>

MixResult: object 类型，类型说明如下

```
{
  MixId: string         // 混流 ID
  FileName?: string     // 混流文件名
  Type?: MixType        // 混流类型，MixType 为 'relay' | 'record' | 'relay-and-record' | 'update-config'，注：queryMix 操作时会返回此项
  PushURL?: string[]    // 转推的 URL 列表，注：stopMix 操作时会返回此项
}
```

<a name="client-stopmix"></a>

### ~~stopMix 方法 - 已废弃~~

结束录制，请使用 [stopRecord](#client-stoprecord)
结束转推，请使用 [stopRelay](#client-stoprelay)

```
client.stopMix(StopMixOptions, callback)
```

#### 参数说明

- StopMixOptions: object 类型, 必传，详细的类型说明如下

```
{
  type?: MixType      // 选传，MixType 为 'relay' | 'record' | 'relay-and-record' 其中之一，分别代表 '转推' | '录制' | '录制并转推'，不传时，默认为 'record'
  pushURL?: String[]  // 字符串数组，若 type 为 relay 或 relay-and-record 时，可用此参数指定需要停止转推的 URL，或留空停止对所有 URL 的转推
}
```

- callback: function 类型，选传，方法的回调函数，函数说明如下

```
function callback(Error, Result) {}
```
Error 为返回值，为空时，说明已执行成功，否则执行失败，值为执行失败的错误信息

Result 为返回值，[MixResult 类型](#mixresult)，执行失败时，此值为空，执行成功时，此值为执行结果

<a name="client-querymix"></a>

### ~~queryMix 方法 - 已废弃~~

查询录制或转推，示例代码：

```
client.queryMix(callback)
```

#### 参数说明

- callback: function 类型，选传，方法的回调函数，函数说明如下

```
function callback(Error, Result) {}
```
Error 为返回值，为空时，说明已执行成功，否则执行失败，值为执行失败的错误信息

Result 为返回值，[MixResult 类型](#mixresult)，执行失败时，此值为空，执行成功时，此值为执行结果

<a name="client-addmixstreams"></a>

### ~~addMixStreams 方法 - 已废弃~~

向录制的音视频中添加流，请使用 [updateRecordStreams](#client-updaterecordstreams)
向转推的音视频中添加流，请使用 [updateRelayStreams](#client-updaterelaystreams)

```
client.addMixStreams(AddMixStreamsOptions, callback)
```

#### 参数说明

- AddMixStreamsOptions: object 类型, 必传，详细的类型说明如下

```
{
  streams: MixStream[]  // 必传，指定需要混合的新流
}
```
> 点击 [MixStream](#mixstream) 见详细的类型说明


- callback: function 类型，选传，方法的回调函数，函数说明如下

```
function callback(Error, Result) {}
```
Error 为返回值，为空时，说明已执行成功，否则执行失败，值为执行失败的错误信息

Result 为返回值，[MixResult 类型](#mixresult)，执行失败时，此值为空，执行成功时，此值为执行结果


<a name="client-removemixstreams"></a>

### ~~removeMixStreams 方法 - 已废弃~~

移除录制中的音视频中部分流，请使用 [updateRecordStreams](#client-updaterecordstreams)
移除转推中的音视频中部分流，请使用 [updateRelayStreams](#client-updaterelaystreams)

```
client.removeMixStreams(RemoveMixStreamsOptions, callback)
```

#### 参数说明

- RemoveMixStreamsOptions: object 类型, 必传，详细的类型说明如下

```
{
  streams: MixStream[]  // 必传，指定需要混合的新流
}
```
> 点击 [MixStream](#mixstream) 见详细的类型说明

- callback: function 类型，选传，方法的回调函数，函数说明如下

```
function callback(Error, Result) {}
```
Error 为返回值，为空时，说明已执行成功，否则执行失败，值为执行失败的错误信息

Result 为返回值，[MixResult 类型](#mixresult)，执行失败时，此值为空，执行成功时，此值为执行结果


<a name="client-setrole"></a>

### 45. setRole 方法

设置用户角色，本方法仅适用于直播模式（live 模式），加入房间前/后，都可通过调用本方法设置用户角色。示例代码：

```
const result = client.setRole(Role)
```

#### 参数说明

- Role: "pull" | "push" | "push-and-pull",   // 设置用户角色，可设 "pull" | "push" | "push-and-pull" 三种角色，分别对应拉流、推流、推+拉流，默认为 "push-and-pull"，特别地，当房间类型为连麦模式（rtc）时，此参数将被忽视，会强制为 "push-and-pull"，即推+拉流

#### 返回值说明

- result: boolean 类型，成功时为 true，失败时为 false


<a name="client-startrecord"></a>

### 46. startRecord 方法

开启录制，示例代码：

```
client.startRecord(StartRecordOptions, callback)
```

#### 参数说明

- StartRecordOptions: object 类型, 必传，详细的类型说明如下

```
{
  bucket: string      // 必传，存储的 bucket, URTC 使用 UCloud 的 UFile 产品进行在存储，相关信息见控制台操作文档
  region: string      // 必传，存储服务所在的地域

  layout?: MixLayoutOptions   // 选传，多路混流时视频的布局设置，类型说明见下面的 MixLayoutOptions 类型，不传时，将使用默认值

  audio?: MixAudioOptions     // 选传，录制后的音频的设置，类型说明见下面的 MixAudioOptions 类型，不传时，将使用默认值
  video?: MixVideoOptions     // 选传，录制后的视频的设置，类型说明见下面的 MixVideoOptions 类型，不传时，将使用默认值

  width?: number      // 选传，录制后的视频的宽度，不传时，默认为 1280
  height?: number     // 选传，录制后的视频的高度，不传时，默认为 720
  backgroundColor?: BackgroundColorOptions  // 选传，背景色，类型说明见下面的 BackgroundColorOptions 类型，不传时，默认为 #000 黑色

  waterMark?: WaterMarkOptions  // 选传，水印设置，类型说明见下面的 WaterMarkOptions 类型，不传时将不添加水印

  streams?: MixStream[]         // 选传，指定需要录制的流，类型说明见下面的 MixStream 类型。不传或传空数组时，会自动添加房间内所有用户的流，如果指定了流，则仅录制指定的流
}
```

<a name="startrecord-mixlayoutoptions"></a>

MixLayoutOptions 类型，类型说明

```
{
  type: MixLayoutType           // MixLayoutType 为 'flow' | 'main' | 'custom' | 'customMain' | 'customFlow' | 'single'，分别代表：1 平铺风格，流式（均分）布局；2 垂直风格，讲课模式，主讲人占大部分屏幕，其他人小屏居于右侧或底部；3 自定义布局；4 定制讲课模式布局；5 定制流式（均分）布局；默认为 'flow'；6 单画面布局（只显示主画面，其他不显示）
  custom?: Object[]             // type 为 'custom'时，自定义布局填在custom里，格式参照RFC5707 Media Server Markup Language (MSML)
  mainViewUId?: string          // type 为 'main' 或 'customMain' 时，指定某用户的流为主画面，默认为当前用户
  mainViewType?: MainViewType   // 主画面类型，'screen' | 'camera'，默认为用户发布的 'camera'
}
```

<a name="mixaudiooptions"></a>

MixAudioOptions 类型，类型说明

```
{
  codec: MixAudioCodec    // 音频的编码格式，MixAudioCodec 为 'aac'，不传时默认为 'aac'
}
```

<a name="mixvideooptions"></a>

MixVideoOptions 类型，类型说明

```
{
  codec: MixVideoCodec    // 视频的编码格式，MixVideoCodec 为 'h264' | 'h265' 其中之一，默认为 'h264'
  quality?: H264Quality   // 视频质量，当 codec 为 h264 时，此项起作用，H264Quality 为 'B' | 'CB' | 'M' | 'E' | 'H' 其中之一，默认为 'CB'
  frameRate?: number      // 视频码率，可选值 6 | 12 | 15 | 24 | 30 | 48 | 60，默认为 15
  bitRate?: number        // 视频比特率，默认为 500
}
```
> 注：关于布局风格, 请参见详细的混流说明 [混流风格](https://github.com/UCloudDocs/urtc/blob/master/cloudRecord/RecordLaylout.md)

<a name="backgroundcoloroptions"></a>

BackgroundColorOptions 类型，类型说明

```
{
  r: number   // r 通道值，默认为 0
  g: number   // g 通道值，默认为 0
  b: number   // b 通道值，默认为 0
}
```

<a name="watermarkoptions"></a>

WaterMarkOptions: object 类型，选传，添加的水印相关配置，类型说明如下

```
{
  position?: 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom' // 选传，指定水印的位置，前面四种类型分别对应 左上，左下，右上，右下，默认 'left-top'
  type?: 'time' | 'image' | 'text' // 选传，水印类型，分别对应时间水印、图片水印、文字水印，默认为 'time'
  remarks?:  string,   // 选传，水印备注，当为时间水印时，传空字符串，当为图片水印时，此处需为图片的 URL（此时必传），当为文字水印时，此处需为水印文字
}
```

<a name="mixstream"></a>

MixStream: object 类型，选传，添加的水印相关配置，类型说明如下

```
{
  uid: string,        // 用户 ID，指定需要混合的流的用户ID（远端用户）
  mediaType: string   // 流的媒体类型，指定需要混合的流的媒体类型，有 'camera' 和 'screen' 两种可选，默认为 'camera'
}
```

- callback: function 类型，选传，方法的回调函数，函数说明如下

```
function callback(Error, Result) {}
```
Error 为返回值，为空时，说明已执行成功，否则执行失败，值为执行失败的错误信息

Result 为返回值，[RecordResult 类型](#recordresult)，执行失败时，此值为空，执行成功时，此值为执行结果

<a name="recordresult"></a>

RecordResult: object 类型，类型说明如下

```
{
  Id: string            // 录制 ID
  FileName?: string     // 录制 文件名
}
```

<a name="client-stoprecord"></a>

### 47. stopRecord 方法

结束录制，示例代码：

```
client.stopRecord(callback)
```

#### 参数说明

- callback: function 类型，选传，方法的回调函数，函数说明如下

```
function callback(Error, Result) {}
```
Error 为返回值，为空时，说明已执行成功，否则执行失败，值为执行失败的错误信息

Result 为返回值，[RecordResult 类型](#recordresult)，执行失败时，此值为空，执行成功时，此值为执行结果


<a name="client-updaterecordstreams"></a>

### 48. updateRecordStreams 方法

增加/删除录制的流，示例代码：

```
client.updateRecordStreams(UpdateMixStreamsOptions, callback)
```

#### 参数说明

- UpdateMixStreamsOptions: object 类型, 必传，详细的类型说明如下

<a name="updatemixstreamsoptions"></a>

UpdateMixStreamsOptions 类型，类型说明

```
{
  type: UpdateMixStreamsType    // 必传，操作类型，UpdateMixStreamsType 值为 'add' | 'remove' 之一，分别为添加新流进行录制，移除录制中的部分流
  streams: MixStream            // 必传，指定需要被添加或移除的流，
}
```

> MixStream 类型参见 [MixStream](#mixstream)

- callback: function 类型，选传，方法的回调函数，函数说明如下

```
function callback(Error, Result) {}
```
Error 为返回值，为空时，说明已执行成功，否则执行失败，值为执行失败的错误信息

Result 为返回值，[RecordResult 类型](#recordresult)，执行失败时，此值为空，执行成功时，此值为执行结果


<a name="client-startrelay"></a>

### 49. startRelay 方法

开启转推，示例代码：

```
client.startRelay(StartRelayOptions, callback)
```

#### 参数说明

- StartRelayOptions: object 类型, 必传，详细的类型说明如下

```
{
  pushURL: string[]           // 必传，为转推到的 RTMP URL 的列表

  layout?: MixLayoutOptions   // 选传，多路混流时视频的布局设置，类型说明见下面的 MixLayoutOptions 类型，不传时，将使用默认值

  audio?: MixAudioOptions     // 选传，转推后的音频的设置，类型说明见下面的 MixAudioOptions 类型，不传时，将使用默认值
  video?: MixVideoOptions     // 选传，转推后的视频的设置，类型说明见下面的 MixVideoOptions 类型，不传时，将使用默认值

  width?: number      // 选传，转推后的视频的宽度，不传时，默认为 1280
  height?: number     // 选传，转推后的视频的高度，不传时，默认为 720
  backgroundColor?: BackgroundColorOptions  // 选传，背景色，类型说明见下面的 BackgroundColorOptions 类型，不传时，默认为 #000 黑色

  waterMark?: WaterMarkOptions  // 选传，水印设置，类型说明见下面的 WaterMarkOptions 类型，不传时将不添加水印

  streams?: MixStream[]         // 选传，指定需要转推的流，类型说明见下面的 MixStream 类型。不传或传空数组时，会自动添加房间内所有用户的流，如果指定了流，则仅转推指定的流

  outputMode?: MixOutputMode    // 选传，转推后输出模式，MixOutputMode 为字符串，有 'audio-video' | 'audio' 两种可填，分别代表：输出音视频 | 只输出音频，不填时，默认为 'audio-video'

  streamAddMode?: MixStreamAddMode  // 选传，转推流的添加模式，MixStreamAddMode 为字符串，有 'automatic' | 'manual' 两种可填，分别代表：自动添加（有新流时） | 手动添加，不填时，默认为 'automatic'
}
```

<a name="startrelay-mixlayoutoptions"></a>

MixLayoutOptions 类型，类型说明

```
{
  type: MixLayoutType           // MixLayoutType 为 'flow' | 'main' | 'custom' | 'customMain' | 'customFlow' | 'single'，分别代表：1 平铺风格，流式（均分）布局；2 垂直风格，讲课模式，主讲人占大部分屏幕，其他人小屏居于右侧或底部；3 自定义布局；4 定制讲课模式布局；5 定制流式（均分）布局；默认为 'flow'；6 单画面布局（只显示主画面，其他不显示）
  standbyTypes?: MixLayoutType[]    // 指定待切换的布局，针对直播中有切换布局的需求，可在启动时指定需要切换的布局，未指定的无法切换，且最多可指定两种可切换的类型（不包含 type 中指定的，即一次转推任务最多有三种布局可相互切换），多余的将被忽略，譬如 `{ type: 'flow', standbyTypes: ['main', 'customMain', 'customFlow'] }`，那么 standbyTypes 中的 'customFlow' 将会被忽略。特别地，由于 'custom' 的特殊性，待切换的布局中不可包含该类型的布局，若填写，则会被忽略。
  custom?: Object[]             // type 为 'custom'时，自定义布局填在custom里，格式参照RFC5707 Media Server Markup Language (MSML)
  mainViewUId?: string          // type 为 'main' 或 'customMain' 时，指定某用户的流为主画面，默认为当前用户
  mainViewType?: MainViewType   // 主画面类型，'screen' | 'camera'，默认为用户发布的 'camera'
}
```

> 注：关于布局风格, 请参见详细的混流说明 [混流风格](https://github.com/UCloudDocs/urtc/blob/master/cloudRecord/RecordLaylout.md)


MixAudioOptions 类型说明详见 [MixAudiooptions](#mixaudiooptions)

MixVideoOptions 类型说明详见 [MixVideoOptions](#mixvideooptions)

BackgroundColorOptions 类型说明详见 [BackgroundColorOptions](#backgroundcoloroptions)

WaterMarkOptions 类型说明详见 [WaterMarkOptions](#watermarkoptions)

MixStream 类型说明详见 [MixStream](#mixstream)

- callback: function 类型，选传，方法的回调函数，函数说明如下

```
function callback(Error, Result) {}
```
Error 为返回值，为空时，说明已执行成功，否则执行失败，值为执行失败的错误信息

Result 为返回值，[RelayResult 类型](#relayresult)，执行失败时，此值为空，执行成功时，此值为执行结果

<a name="relayresult"></a>

RelayResult: object 类型，类型说明如下

```
{
  Id: string            // 转推 ID
  PushURL?: string[]    // 转推 URL
}
```

<a name="client-stoprelay"></a>

### 50. stopRelay 方法

结束转推，示例代码：

```
client.stopRelay(callback)
```

#### 参数说明

- callback: function 类型，选传，方法的回调函数，函数说明如下

```
function callback(Error, Result) {}
```
Error 为返回值，为空时，说明已执行成功，否则执行失败，值为执行失败的错误

Result 为返回值，[RelayResult 类型](#relayresult)，执行失败时，此值为空，执行成功时，此值为执行结果


<a name="client-updaterelaystreams"></a>

### 51. updateRelayStreams 方法

增加/删除转推的流，示例代码：

```
client.updateRelayStreams(UpdateMixStreamsOptions, callback)
```

#### 参数说明

- UpdateMixStreamsOptions: object 类型, 必传，详细的类型说明见 [UpdateMixStreamsOptions](#updatemixstreamsoptions)


- callback: function 类型，选传，方法的回调函数，函数说明如下

```
function callback(Error, Result) {}
```
Error 为返回值，为空时，说明已执行成功，否则执行失败，值为执行失败的错误

Result 为返回值，[RelayResult 类型](#relayresult)，执行失败时，此值为空，执行成功时，此值为执行结果


----

<a name='getdevices'></a>

## 二、getDevices 方法

用于获取当前浏览器可访问的音视频设备的设备信息，包括麦克风、摄像头、音频输出设备

> 注：若站点未经过用户授权浏览器使用麦克风、摄像头、音频输出设备，会弹出提示要求用户进行授权

```
UCloudRTC.getDevices(onSuccess, onFailure)
```

#### 参数说明

- onSuccess: 必传，函数类型，方法调用成功时执行的回调函数。

```
function(MediaDeviceInfos) {}
```

函数参数 MediaDeviceInfos 为返回值，MediaDeviceInfo 类型的数组，为一组输入、输出设备的描述信息，点击
[MediaDeviceInfo](https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo) 查看其详情。

- onFailure: 选传，函数类型，方法调用失败时执行的回调函数。

```
function(Err) {}
```
Err 为错误信息

----

<a name='getsupportprofilenames'></a>

## 三、getSupportProfileNames 方法

用于获取当前 SDK 支持的视频质量的名称

```
const profileNames = UCloudRTC.getSupportProfileNames();
```

#### 返回值说明

- profileNames: String 类型的数组，如当前可用的 ["240\*180", "320\*180", "320\*240", "480\*360", "640\*360", "640\*480", "1280\*720", "1920\*1080"]

名称 | 视频宽高 | 帧率 | 视频最小带宽 | 视频最大带宽
:-: | :-: | :-: | :-: | :-:
"240\*180" | 240\*180 | 20 | 100 | 200
"320\*180" | 320\*180 | 20 | 100 | 300
"320\*240" | 320\*240 | 20 | 100 | 400
"480\*360" | 480\*360 | 20 | 100 | 400
"640\*360" | 640\*360 | 20 | 100 | 500
"640\*480" | 640\*480 | 20 | 100 | 600
"1280\*720" | 1280\*720 | 20 | 100 | 1000
"1920\*1080" | 1920\*1080 | 20 | 100 | 1500

---

<a name="getsupportedcodec"></a>

## 四. getSupportedCodec 方法

检测当前浏览器支持的音视频的编解码格式

```
UCloudRTC.getSupportedCodec(callback);
```

#### 参数说明

- callback: function 类型，必传，方法的回调函数，函数说明如下

```
function callback(Codecs) { }
```

Codecs 为返回值，object 类型，详细的类型说明如下

```
{
  audio: string[],  // 字符串数组，支持的音频编解码格式。可能含有 "opus"，或为空数组。
  video: string[],  // 字符串数组，支持的视频编解码格式。可能含有 "h264"、"vp8" 两种取值，或为空数组。
}
```

---

<a name="issupportwebrtc"></a>

## 五. isSupportWebRTC 方法

检测当前浏览器对 WebRTC 的适配情况

```
const result = UCloudRTC.isSupportWebRTC();
```

#### 返回值说明

- result: boolean 类型，
  - true: 当前使用的浏览器支持 WebRTC。
  - false: 当前使用的浏览器不支持 WebRTC。

---

<a name="devicedetection"></a>

### 六. deviceDetection 方法

发布本地流或启动预览时，有可能因为麦克风或摄像头设备问题（如驱动问题，或未经授权等），导致无法正常发布或预览。此方法可用于发布或预览前的设备检测，根据检测结果，再自行决定在发布或预览时启用麦克风或摄像头或麦克风和摄像头，示例代码：

```
UCloudRTC.deviceDetection(DeviceDetectionOptions, callback);
```

#### 参数说明

- DeviceDetectionOptions: object 类型, 必传，详细的类型说明如下

```
{
  audio: boolean          // 必填，指定是否检测麦克风设备
  video: boolean          // 必填，指定是否检测摄像头设备
  microphoneId?: string   // 选填，指定需要检测的麦克风设备的ID，可通过 getMicrophones 方法查询获得该ID，不填时，将检测默认的麦克风设备
  cameraId?: string       // 选填，指定需要检测的摄像头设备的ID，可以通过 getCameras 方法查询获得该ID，不填时，将检测默认的摄像头设备
}
```

- callback: function 类型，必传，方法的回调函数，函数说明如下

```
function callback(Result) {
  if (Result.audio && Result.video) {
    // 麦克风和摄像头都可有和，发布或预览时可启用麦克风和摄像头
    // client.publish({audio: true, video: true});
  } else if (Result.audio) {
    // 麦克风可用，发布或预览时能启用麦克风
    // client.publish({audio: true, video: false});
  } else if (Result.video) {
    // 摄像头可用，发布或预览时能启用摄像头
    // client.publish({audio: false, video: true});
  } else {
    // 麦克风和摄像头都不可用
  }
}
```

Result 为返回值，DeviceDetectionResult 类型，详细的类型说明如下

```
{
  audio: boolean,       // 指麦克风设备是否可用
  audioError?: string   // 当麦克风不可用时，此字段可说明设备不可用的原因
  video: boolean        // 指摄像头设备是否可用
  videoError?: string   // 当摄像头不可用时，此字段可说明设备不可用的原因
}
```

> audioError 和 videoError 可能的错误信息有：[参见](#device-error)


---

<a name='version'></a>

## 七、version 属性

version 属性用于显示当前 sdk 的版本

---

<a name='generateToken'></a>

## 八、generateToken 方法

generateToken 方法仅用于试用 URTC 产品时替代服务器生成 sdk 所需 token 的方法，正式使用 URTC 产品时，需要搭建后台服务按规则生成 token

```
const token = UCloudRTC.generateToken(AppId, AppKey, RoomId, UserId);
```

#### 参数说明

- AppId: string 类型, 必传，可从 UCloud 控制台查看

- AppKey: string 类型, 必传，可从 UCloud 控制台查看（请注意此 AppKey 不可暴露给其他人）

- RoomId: string 类型, 必传，将要加入的房间的 ID

- UserId: string 类型，必传，将要加入的用户的 ID

---

<a name='logger'></a>

## 九、Logger 对象

Logger 对象用于调试时打印内部日志，包含以下方法：

* [setLogLevel 方法](#logger-setloglevel)
* [debug 方法](#logger-debug)
* [info 方法](#logger-info)
* [warn 方法](#logger-warn)
* [error 方法](#logger-error)

<a name='logger-setloglevel'></a>

### 1. setLogLevel 方法

用于设置 Logger 打印日志的级别

```
Logger.setLogLevel(Level)
```

#### 参数说明

Level: 必传，有 "debug" | "info" | "warn" | "error" 四个日志级别，默认为 "warn" 级别

<a name='logger-debug'></a>

### 2. debug 方法

用于调试代码时，打印 debug 日志

```
Logger.debug(a, ...)  // 可传任意数量的任意类型的变量作为参数
```

<a name='logger-info'></a>

### 3. info 方法

<a name='logger-warn'></a>

### 4. warn 方法

<a name='logger-error'></a>

### 5. error 方法

以上三种方法分别打印对应级别的日志，使用方法与 debug 方法相同

---

<a name='setservers'></a>

## 十、setServers 方法

可配置 URTC 服务的域名，用于私有化部署，目前有房间服务器和日志服务器的两种域名可进行配置，示例代码：

```
UCloudRTC.setServers({
  api: "https://env1.urtc.com",   // api 为 URTC 房间服务的访问地址
  log: "https://env1.urtclog.com" // log 为 URTC 日志服务的访问地址
  signal: "wss://env1.urtcsignal.com.cn:5005" // signal 为 URTC 信令服务的访问地址
})
```

> 注：
> 
> 1. 当不需要日志服务（未部署日志服务器）时，可不用设置 log。
> 2. 当仅部署一台信令服务器时，由于可直接指定信令服务的访问地址，不需要由房间服务分配，此时可仅设置 signal，不用设置 api，如：`UCloudRTC.setServers({signal: "wss://env1.urtcsignal.com.cn:5005"})`。
> 3. 当设置了 signal 时，优先使用 signal 指定的信令服务的访问地址，不再调用由 api 指定的房间服务分配信令服务访问地址的接口。
