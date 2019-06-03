package net.novaborn.living.app.modular.setting.service.impl;

import net.novaborn.living.app.modular.setting.dao.ISettingsDao;
import net.novaborn.living.app.modular.setting.entity.Setting;
import net.novaborn.living.app.modular.setting.service.ISettingsService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created with IntelliJ IDEA
 * User: wangyong
 * Date: 10/6/17
 * Time: 1:59 AM
 * Description:
 */

@Service
public class SettingsService implements ISettingsService {
    @Resource
    ISettingsDao settingsDao;

    @Override
    public String getVal(String key) {
        Setting setting = settingsDao.selectById(key);
        if (setting == null) {
            return null;
        } else {
            return setting.getValue();
        }
    }

    @Override
    public boolean add(Setting setting) {
        if (settingsDao.selectById(setting.getKey()) != null) {
            return this.update(setting);
        } else {
            return settingsDao.insert(setting) > 0;
        }
    }

    @Override
    public boolean add(String k, String v) {
        return this.add(new Setting(k, v));
    }

    @Override
    public boolean update(Setting setting) {
        return settingsDao.updateById(setting) > 0;
    }

    @Override
    public boolean delete(String key) {
        return settingsDao.deleteById(key) > 0;
    }

    @Override
    public List<Setting> getAllSettings() {
        return settingsDao.selectList(null);
    }
}
