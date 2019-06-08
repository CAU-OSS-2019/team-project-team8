team-project-team8 README
======================
<br> 
<br> 
<br> 

[기능 소개]：
-------------
<br> 
우리 팀의 주제는 모바일 크로스 플랫폼 실시간 스트리밍 앱 제작입니다. 송출하고자 하는 영상을 기존에 있는 방송 플랫폼(Twitch TV, Afreeca TV, etc.)에 보내는 역할을 하는 앱이 아닌, 이 앱에서 스트리머는 직접 방송을 하고, 시청자는 방송을 볼 수 있는 또 하나의 새로운 플랫폼을 구현하는 것이 목적입니다.
<br> 
<br> 
<br> 
<br> 

[개발 환경]：
----------
<br> 
<br> 
<br> 
Netty：
<br> 
<br> 
Netty is a non-blocking I/O client-server framework for the development of Java network applications such as protocol servers and clients. 
•	Application server
•	Node.js
•	Twisted (software)
•	Apache MINA
<br> 
<br> 
React Native：
<br> 
<br> 
React Native is an open-source mobile application framework created by Facebook. It is used to develop applications for Android, iOS and UWP by enabling developers to use React along with native platform capabilities.
<br> 
<br> 

[프로젝트 구조 소개]：
--------------------
<br> 
<br> 
<br> 

├─end-admin<br> 
│  ├─admin-manager<br> 
│  │  ├─src<br> 
│  │  │  ├─main<br> 
│  │  │  │  ├─java<br> 
│  │  │  │  │  └─net<br> 
│  │  │  │  │      └─novaborn<br> 
│  │  │  │  │          └─living<br> 
│  │  │  │  │              └─app<br> 
│  │  │  │  │                  ├─common<br> 
│  │  │  │  │                  │  ├─aop<br> 
│  │  │  │  │                  │  ├─exception<br> 
│  │  │  │  │                  │  ├─tips<br> 
│  │  │  │  │                  │  └─xss<br> 
│  │  │  │  │                  ├─config<br> 
│  │  │  │  │                  │  └─properties<br> 
│  │  │  │  │                  ├─modular<br> 
│  │  │  │  │                  │  ├─auth<br> 
│  │  │  │  │                  │  │  ├─converter<br> 
│  │  │  │  │                  │  │  ├─filter<br> 
│  │  │  │  │                  │  │  ├─security<br> 
│  │  │  │  │                  │  │  │  └─impl<br> 
│  │  │  │  │                  │  │  ├─util<br> 
│  │  │  │  │                  │  │  └─validator<br> 
│  │  │  │  │                  │  │      ├─dto<br> 
│  │  │  │  │                  │  │      └─impl<br> 
│  │  │  │  │                  │  └─setting<br> 
│  │  │  │  │                  │      ├─dao<br> 
│  │  │  │  │                  │      ├─entity<br> 
│  │  │  │  │                  │      └─service<br> 
│  │  │  │  │                  │          └─impl<br> 
│  │  │  │  │                  └─web<br> 
│  │  │  │  │                      ├─api<br> 
│  │  │  │  │                      │  ├─admin<br> 
│  │  │  │  │                      │  │  └─warpper<br> 
│  │  │  │  │                      │  └─client<br> 
│  │  │  │  │                      └─dto<br> 
│  │  │  │  └─resources<br> 
│  │  │  │      └─mybatis<br> 
│  │  │  └─test<br> 
│  │  │      └─java<br> 
│  │  │          └─net<br> 
│  │  │              └─novaborn<br> 
│  │  │                  └─living<br> 
│  │  │                      └─app<br> 
│  │  │                          ├─fastjson<br> 
│  │  │                          └─jwt<br> 
│  │  └─target<br> 
│  │      ├─classes<br> 
│  │      │  ├─META-INF<br> 
│  │      │  ├─mybatis<br> 
│  │      │  └─net<br> 
│  │      │      └─novaborn<br> 
│  │      │          └─living<br> 
│  │      │              └─app<br> 
│  │      │                  ├─common<br> 
│  │      │                  │  ├─aop<br> 
│  │      │                  │  ├─exception<br> 
│  │      │                  │  ├─tips<br> 
│  │      │                  │  └─xss<br> 
│  │      │                  ├─config<br> 
│  │      │                  │  └─properties<br> 
│  │      │                  ├─modular<br> 
│  │      │                  │  ├─auth<br> 
│  │      │                  │  │  ├─converter<br> 
│  │      │                  │  │  ├─filter<br> 
│  │      │                  │  │  ├─security<br> 
│  │      │                  │  │  │  └─impl<br> 
│  │      │                  │  │  ├─util<br> 
│  │      │                  │  │  └─validator<br> 
│  │      │                  │  │      ├─dto<br> 
│  │      │                  │  │      └─impl<br> 
│  │      │                  │  └─setting<br> 
│  │      │                  │      ├─dao<br> 
│  │      │                  │      ├─entity<br> 
│  │      │                  │      └─service<br> 
│  │      │                  │          └─impl<br> 
│  │      │                  └─web<br> 
│  │      │                      ├─api<br> 
│  │      │                      │  ├─admin<br> 
│  │      │                      │  │  └─warpper<br> 
│  │      │                      │  └─client<br> 
│  │      │                      └─dto<br> 
│  │      └─test-classes<br> 
│  │          └─net<br> 
│  │              └─novaborn<br> 
│  │                  └─living<br> 
│  │                      └─app<br> 
│  │                          ├─fastjson<br> 
│  │                          └─jwt<br> 
│  └─admin-vue<br> 
│      ├─build<br> 
│      ├─config<br> 
│      ├─src<br> 
│      │  ├─api<br> 
│      │  ├─assets<br> 
│      │  │  └─404_images<br> 
│      │  ├─components<br> 
│      │  │  ├─Breadcrumb<br> 
│      │  │  ├─Hamburger<br> 
│      │  │  ├─ScrollPane<br> 
│      │  │  └─SvgIcon<br> 
│      │  ├─directive<br> 
│      │  │  ├─clipboard<br> 
│      │  │  ├─el-dragDialog<br> 
│      │  │  └─waves<br> 
│      │  ├─icons<br> 
│      │  │  └─svg<br> 
│      │  ├─router<br> 
│      │  ├─store<br> 
│      │  │  └─modules<br> 
│      │  ├─styles<br> 
│      │  ├─utils<br> 
│      │  └─views<br> 
│      │      ├─dashboard<br> 
│      │      │  └─components<br> 
│      │      ├─layout<br> 
│      │      │  ├─components<br> 
│      │      │  │  └─Sidebar<br> 
│      │      │  └─mixin<br> 
│      │      ├─living<br> 
│      │      ├─login<br> 
│      │      ├─redirect<br> 
│      │      ├─setting<br> 
│      │      └─user<br> 
│      └─static<br> 
│          └─img<br> 
└─front-app<br> 
    ├─android<br> 
    │  ├─.settings<br> 
    │  ├─app<br> 
    │  │  └─src<br> 
    │  │      ├─debug<br> 
    │  │      └─main<br> 
    │  │          ├─assets<br> 
    │  │          │  └─fonts<br> 
    │  │          ├─java<br> 
    │  │          │  └─com<br> 
    │  │          │      └─livestreamingapp<br> 
    │  │          │          └─react<br> 
    │  │          └─res<br> 
    │  │              ├─drawable<br> 
    │  │              ├─layout<br> 
    │  │              ├─mipmap-hdpi<br> 
    │  │              ├─mipmap-mdpi<br> 
    │  │              ├─mipmap-xhdpi<br> 
    │  │              ├─mipmap-xxhdpi<br> 
    │  │              ├─mipmap-xxxhdpi<br> 
    │  │              └─values<br> 
    │  ├─gradle<br> 
    │  │  └─wrapper<br> 
    │  ├─keystores<br> 
    │  └─RtmpPublisher<br> 
    │      └─src<br> 
    │          └─main<br> 
    │              ├─java<br> 
    │              │  └─com<br> 
    │              │      └─takusemba<br> 
    │              │          └─rtmppublisher<br> 
    │              │              └─gles<br> 
    │              └─res<br> 
    │                  └─values<br> 
    ├─ios<br> 
    │  ├─LiveStreamingApp<br> 
    │  │  ├─Base.lproj<br> 
    │  │  └─Images.xcassets<br> 
    │  │      └─AppIcon.appiconset<br> 
    │  ├─LiveStreamingApp-tvOS<br> 
    │  ├─LiveStreamingApp-tvOSTests<br> 
    │  ├─LiveStreamingApp.xcodeproj<br> 
    │  │  └─xcshareddata<br> 
    │  │      └─xcschemes<br> 
    │  └─LiveStreamingAppTests<br> 
    ├─src<br> 
    │  ├─components<br> 
    │  ├─native-modules<br> 
    │  └─resources<br> 
    └─__tests__<br> 
<br>  
<br> 

[팀 구성원]：
--------
<br> 
20165172 왕천용<br> 
20134220 우정현<br> 
20161795 고가해<br> 
20173954 유진<br> 
20174950 온가력<br> 


