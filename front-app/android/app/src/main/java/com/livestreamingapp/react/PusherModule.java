package com.livestreamingapp.react;

import android.content.Intent;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.livestreamingapp.PusherActivity;

import javax.annotation.Nonnull;

public class PusherModule extends ReactContextBaseJavaModule {

    public PusherModule(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Nonnull
    @Override
    public String getName() {
        return "Pusher";
    }


    @ReactMethod
    public void startPushStream(String rtmpUrl) {
        Intent intent = new Intent(getReactApplicationContext(), PusherActivity.class);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        intent.putExtra("rtmpUrl",rtmpUrl);
        getReactApplicationContext().startActivity(intent);
    }
}
