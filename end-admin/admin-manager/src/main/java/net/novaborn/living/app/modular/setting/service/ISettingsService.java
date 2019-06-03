package net.novaborn.living.app.modular.setting.service;

import net.novaborn.living.app.modular.setting.entity.Setting;

import java.util.List;

/**
 * Created with IntelliJ IDEA
 * User: wangyong
 * Date: 10/6/17
 * Time: 1:59 AM
 * Description:
 */
public interface ISettingsService {
    String getVal(String key);

    boolean add(String key, String value);

    boolean add(Setting setting);

    boolean update(Setting setting);

    boolean delete(String key);

    List<Setting> getAllSettings();
}
