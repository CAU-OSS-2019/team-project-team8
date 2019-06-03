package net.novaborn.living.app.web.api.admin;

import net.novaborn.living.app.common.tips.SuccessTip;
import net.novaborn.living.app.modular.setting.entity.Setting;
import net.novaborn.living.app.modular.setting.service.impl.SettingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController()
@RequestMapping("/api/admin/setting")
public class SettingApiController {
    @Autowired
    SettingsService settingsService;

    @GetMapping("getSettings")
    public ResponseEntity gatAutoGameList() {
        return ResponseEntity.ok(settingsService.getAllSettings());
    }

    @PostMapping("updateSettings")
    public ResponseEntity gatAutoGameList(@RequestParam Map<String, String> args) {
        args.forEach((k, v) -> settingsService.add(new Setting(k, v)));
        return ResponseEntity.ok(new SuccessTip());
    }
}
