package com.zareanmasoud.rnaccessibilityservice;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import javax.annotation.Nullable;

public class AccessibilityServiceModule extends ReactContextBaseJavaModule {

    // TODO: should be non-static and final
    private static ReactApplicationContext reactContext;

    public AccessibilityServiceModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "AccessibilityService";
    }

    @ReactMethod
    public void sampleMethod(String stringArgument, int numberArgument, Callback callback) {
        callback.invoke("Received number: " + numberArgument + " string: " + stringArgument);
    }

    // TODO: should be non-static
    private static void sendEvent(
            ReactContext reactContext,
            String eventName,
            @Nullable String params
    ) {
      reactContext
          .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
          .emit(eventName, params);
    }

    // TODO: should be non-static
    public static void prepareEvent(String params) {
            sendEvent(reactContext, "EventReminder", params);
    }
}
