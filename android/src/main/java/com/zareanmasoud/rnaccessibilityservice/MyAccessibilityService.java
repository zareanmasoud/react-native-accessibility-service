package com.zareanmasoud.rnaccessibilityservice;

import android.accessibilityservice.AccessibilityService;
import android.view.accessibility.AccessibilityEvent;
import android.view.accessibility.AccessibilityNodeInfo;

public class MyAccessibilityService extends AccessibilityService {

    @Override
    public void onAccessibilityEvent(AccessibilityEvent accessibilityEvent) {
        AccessibilityNodeInfo source = accessibilityEvent.getSource();
        if (source == null) {
            return;
        }

        AccessibilityServiceModule.prepareEvent(accessibilityEvent.toString());
    }

    @Override
    public void onInterrupt() {

    }
}
