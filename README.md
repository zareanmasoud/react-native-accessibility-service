# react-native-accessibility-service

## Installation

`$ yarn add @zareanmasoud/react-native-accessibility-service`

or

`$ npm install @zareanmasoud/react-native-accessibility-service --save`

**Linking:**

`$ react-native link @zareanmasoud/react-native-accessibility-service`

## Usage
In your component:
```javascript
import React, {useEffect, useRef} from 'react';
import {NativeEventEmitter} from 'react-native';
import AccessibilityService from '@zareanmasoud/react-native-accessibility-service';

const App: () => React$Node = () => {
  let eventEmitterListener = useRef(null);

  useEffect(() => {
    const eventEmitter = new NativeEventEmitter(AccessibilityService);
    eventEmitterListener.current = eventEmitter.addListener(
      'EventReminder',
      event => {
        console.log('event', event);
      },
    );

    return () => {
      eventEmitterListener.current.remove();
    };
  }, []);

...

}

```
***
Add this in your manifest:
```xml
<application>
  ...
  <service
    android:name="com.reactlibrary.MyAccessibilityService"
    android:permission="android.permission.BIND_ACCESSIBILITY_SERVICE"
    android:label="@string/accessibility_service_label">
    <intent-filter>
      <action android:name="android.accessibilityservice.AccessibilityService" />
    </intent-filter>
    <meta-data
      android:name="android.accessibilityservice"
      android:resource="@xml/accessibility_service_config" />
  </service>
  ...
</application>
```
***
Add this file in res/xml folder:
```xml
<accessibility-service xmlns:android="http://schemas.android.com/apk/res/android"
  android:description="@string/accessibility_service_description"
  android:packageNames="com.example"
  android:accessibilityEventTypes="typeAllMask"
  android:accessibilityFlags="flagDefault"
  android:accessibilityFeedbackType="feedbackSpoken"
  android:notificationTimeout="100"
  android:canRetrieveWindowContent="true"
  android:settingsActivity="com.example.android.accessibility.ServiceSettingsActivity" />
```
Configure based your needs

more info: [service config section in developers.android.com](https://developer.android.com/guide/topics/ui/accessibility/service#service-config)
***
Add this in res/values/strings file:
```xml
<resources> 
  ... 
  <string name="accessibility_service_label">[your app name or service]</string>
  <string name="accessibility_service_description">[description of your service]</string>
  ...
</resources>
```
Fill in the brackets with your service's name and description
