package com.livestreamingapp;

import android.Manifest;
import android.content.pm.PackageManager;
import android.opengl.GLSurfaceView;
import android.os.Handler;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.takusemba.rtmppublisher.Publisher;
import com.takusemba.rtmppublisher.PublisherListener;

public class PusherActivity extends AppCompatActivity implements PublisherListener {
    private Publisher publisher;
    private GLSurfaceView glView;
    private Button publishButton;
    private ImageView cameraButton;
    private TextView label;


    private String url;
    private Handler handler = new Handler();
    private Thread thread;
    private boolean isCounting = false;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_pusher);

        permissionVerify();

        glView = findViewById(R.id.surface_view);
        publishButton = findViewById(R.id.toggle_publish);
        cameraButton = findViewById(R.id.toggle_camera);
        label = findViewById(R.id.live_label);

        url = getIntent().getStringExtra("rtmpUrl");

        if (url == null || url.equals("")) {
            Toast.makeText(this, R.string.error_empty_url, Toast.LENGTH_SHORT).show();
        } else {
            publisher = new Publisher.Builder(this)
                    .setGlView(glView)
                    .setUrl(url)
                    .setSize(Publisher.Builder.DEFAULT_WIDTH, Publisher.Builder.DEFAULT_HEIGHT)
                    .setAudioBitrate(Publisher.Builder.DEFAULT_AUDIO_BITRATE * 10 * 5)      //5M
                    .setVideoBitrate(Publisher.Builder.DEFAULT_VIDEO_BITRATE * 10 * 5)       // 5M
                    .setCameraMode(Publisher.Builder.DEFAULT_MODE)
                    .setListener(this)
                    .build();


            publishButton.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    if (publisher.isPublishing()) {
                        publisher.stopPublishing();
                    } else {
                        publisher.startPublishing();
                    }
                }
            });


            cameraButton.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    publisher.switchCamera();
                }
            });
        }
    }

    @Override
    public void onStarted() {
        Toast.makeText(this, R.string.started_publishing, Toast.LENGTH_SHORT).show();
        updateControls();
        startCounting();
    }

    @Override
    public void onStopped() {
        Toast.makeText(this, R.string.stopped_publishing, Toast.LENGTH_SHORT).show();
        updateControls();
        stopCounting();
    }

    @Override
    public void onDisconnected() {
        Toast.makeText(this, R.string.disconnected_publishing, Toast.LENGTH_SHORT).show();
        updateControls();
        stopCounting();
    }

    @Override
    public void onFailedToConnect() {
        Toast.makeText(this, R.string.failed_publishing, Toast.LENGTH_SHORT).show();
        updateControls();
        stopCounting();
    }

    private void updateControls() {
        publishButton.setText(getString(publisher.isPublishing() ? R.string.stop_publishing : R.string.start_publishing));
    }

    private void startCounting() {
        isCounting = true;
        label.setText(getString(R.string.publishing_label, format(0L), format(0L)));
        label.setVisibility(View.VISIBLE);


        thread = new Thread(new Runnable() {
            @Override
            public void run() {
                final long startedAt = System.currentTimeMillis();
                long updatedAt = System.currentTimeMillis();

                while (isCounting) {
                    if (System.currentTimeMillis() - updatedAt > 1000) {
                        updatedAt = System.currentTimeMillis();
                        handler.post(new Runnable() {
                            @Override
                            public void run() {
                                long diff = System.currentTimeMillis() - startedAt;
                                long second = diff / 1000 % 60;
                                long min = diff / 1000 / 60;
                                label.setText(getString(R.string.publishing_label, format(min), format(second)));
                            }
                        });
                    }
                }
            }
        });
        thread.start();
    }

    private void stopCounting() {
        isCounting = false;
        label.setText("");
        label.setVisibility(View.GONE);
        if (thread != null && thread.isAlive()) {
            thread.interrupt();
        }
    }

    private String format(Long number) {
        return String.format("%02d", number);
    }

    private void permissionVerify() {
        if (ContextCompat.checkSelfPermission(this, Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {
            //ask for authorisation
            ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.CAMERA}, 50);
        }
        if (ContextCompat.checkSelfPermission(this, Manifest.permission.INTERNET) != PackageManager.PERMISSION_GRANTED) {
            //ask for authorisation
            ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.INTERNET}, 50);
        }
        if (ContextCompat.checkSelfPermission(this, Manifest.permission.RECORD_AUDIO) != PackageManager.PERMISSION_GRANTED) {
            //ask for authorisation
            ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.RECORD_AUDIO}, 50);
        }
    }
}
