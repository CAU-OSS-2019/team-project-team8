team-project-team8 README
=========================

[기능 소개]：
-----------
우리 팀의 주제는 모바일 크로스 플랫폼 실시간 스트리밍 앱 제작입니다. 송출하고자 하는 영상을 기존에 있는 방송 플랫폼(Twitch TV, Afreeca TV, etc.)에 보내는 역할을 하는 앱이 아닌, 이 앱에서 스트리머는 직접 방송을 하고, 시청자는 방송을 볼 수 있는 또 하나의 새로운 플랫폼을 구현하는 것이 목적입니다.


[개발 환경]：
------------

Netty：

Netty is a non-blocking I/O client-server framework for the development of Java network applications such as protocol servers and clients. 
•	Application server
•	Node.js
•	Twisted (software)
•	Apache MINA


React Native：

React Native is an open-source mobile application framework created by Facebook. It is used to develop applications for Android, iOS and UWP by enabling developers to use React along with native platform capabilities.


[프로젝트 구조 소개]：
--------------------

├─end-admin<br> 
│  ├─admin-manager<br> 
│  │  ├─src<br> <br>
│  │  │  ├─main<br> 
│  │  │  │  ├─java<br> 
│  │  │  │  │  └─net
│  │  │  │  │      └─novaborn
│  │  │  │  │          └─living
│  │  │  │  │              └─app
│  │  │  │  │                  ├─common
│  │  │  │  │                  │  ├─aop
│  │  │  │  │                  │  ├─exception
│  │  │  │  │                  │  ├─tips
│  │  │  │  │                  │  └─xss
│  │  │  │  │                  ├─config
│  │  │  │  │                  │  └─properties
│  │  │  │  │                  ├─modular
│  │  │  │  │                  │  ├─auth
│  │  │  │  │                  │  │  ├─converter
│  │  │  │  │                  │  │  ├─filter
│  │  │  │  │                  │  │  ├─security
│  │  │  │  │                  │  │  │  └─impl
│  │  │  │  │                  │  │  ├─util
│  │  │  │  │                  │  │  └─validator
│  │  │  │  │                  │  │      ├─dto
│  │  │  │  │                  │  │      └─impl
│  │  │  │  │                  │  └─setting
│  │  │  │  │                  │      ├─dao
│  │  │  │  │                  │      ├─entity
│  │  │  │  │                  │      └─service
│  │  │  │  │                  │          └─impl
│  │  │  │  │                  └─web
│  │  │  │  │                      ├─api
│  │  │  │  │                      │  ├─admin
│  │  │  │  │                      │  │  └─warpper
│  │  │  │  │                      │  └─client
│  │  │  │  │                      └─dto
│  │  │  │  └─resources
│  │  │  │      └─mybatis
│  │  │  └─test
│  │  │      └─java
│  │  │          └─net
│  │  │              └─novaborn
│  │  │                  └─living
│  │  │                      └─app
│  │  │                          ├─fastjson
│  │  │                          └─jwt
│  │  └─target
│  │      ├─classes
│  │      │  ├─META-INF
│  │      │  ├─mybatis
│  │      │  └─net
│  │      │      └─novaborn
│  │      │          └─living
│  │      │              └─app
│  │      │                  ├─common
│  │      │                  │  ├─aop
│  │      │                  │  ├─exception
│  │      │                  │  ├─tips
│  │      │                  │  └─xss
│  │      │                  ├─config
│  │      │                  │  └─properties
│  │      │                  ├─modular
│  │      │                  │  ├─auth
│  │      │                  │  │  ├─converter
│  │      │                  │  │  ├─filter
│  │      │                  │  │  ├─security
│  │      │                  │  │  │  └─impl
│  │      │                  │  │  ├─util
│  │      │                  │  │  └─validator
│  │      │                  │  │      ├─dto
│  │      │                  │  │      └─impl
│  │      │                  │  └─setting
│  │      │                  │      ├─dao
│  │      │                  │      ├─entity
│  │      │                  │      └─service
│  │      │                  │          └─impl
│  │      │                  └─web
│  │      │                      ├─api
│  │      │                      │  ├─admin
│  │      │                      │  │  └─warpper
│  │      │                      │  └─client
│  │      │                      └─dto
│  │      └─test-classes
│  │          └─net
│  │              └─novaborn
│  │                  └─living
│  │                      └─app
│  │                          ├─fastjson
│  │                          └─jwt
│  └─admin-vue
│      ├─build
│      ├─config
│      ├─src
│      │  ├─api
│      │  ├─assets
│      │  │  └─404_images
│      │  ├─components
│      │  │  ├─Breadcrumb
│      │  │  ├─Hamburger
│      │  │  ├─ScrollPane
│      │  │  └─SvgIcon
│      │  ├─directive
│      │  │  ├─clipboard
│      │  │  ├─el-dragDialog
│      │  │  └─waves
│      │  ├─icons
│      │  │  └─svg
│      │  ├─router
│      │  ├─store
│      │  │  └─modules
│      │  ├─styles
│      │  ├─utils
│      │  └─views
│      │      ├─dashboard
│      │      │  └─components
│      │      ├─layout
│      │      │  ├─components
│      │      │  │  └─Sidebar
│      │      │  └─mixin
│      │      ├─living
│      │      ├─login
│      │      ├─redirect
│      │      ├─setting
│      │      └─user
│      └─static
│          └─img
└─front-app
    ├─android
    │  ├─.settings
    │  ├─app
    │  │  └─src
    │  │      ├─debug
    │  │      └─main
    │  │          ├─assets
    │  │          │  └─fonts
    │  │          ├─java
    │  │          │  └─com
    │  │          │      └─livestreamingapp
    │  │          │          └─react
    │  │          └─res
    │  │              ├─drawable
    │  │              ├─layout
    │  │              ├─mipmap-hdpi
    │  │              ├─mipmap-mdpi
    │  │              ├─mipmap-xhdpi
    │  │              ├─mipmap-xxhdpi
    │  │              ├─mipmap-xxxhdpi
    │  │              └─values
    │  ├─gradle
    │  │  └─wrapper
    │  ├─keystores
    │  └─RtmpPublisher
    │      └─src
    │          └─main
    │              ├─java
    │              │  └─com
    │              │      └─takusemba
    │              │          └─rtmppublisher
    │              │              └─gles
    │              └─res
    │                  └─values
    ├─ios
    │  ├─LiveStreamingApp
    │  │  ├─Base.lproj
    │  │  └─Images.xcassets
    │  │      └─AppIcon.appiconset
    │  ├─LiveStreamingApp-tvOS
    │  ├─LiveStreamingApp-tvOSTests
    │  ├─LiveStreamingApp.xcodeproj
    │  │  └─xcshareddata
    │  │      └─xcschemes
    │  └─LiveStreamingAppTests
    ├─src
    │  ├─components
    │  ├─native-modules
    │  └─resources
    └─__tests__


[팀 구성원]：
-----------

20165172 왕천용
20134220 우정현
20161795 고가해
20173954 유진
20174950 온가력


