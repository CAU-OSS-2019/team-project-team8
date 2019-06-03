package net.novaborn.living.app.web.api.admin.warpper;

import net.novaborn.living.app.common.BaseControllerWarpper;
import java.util.Map;

public class ExampleWarpper extends BaseControllerWarpper {

    public ExampleWarpper(Object obj) {
        super(obj);
    }

    @Override
    protected void warpTheMap(Map<String, Object> map) {
        map.put("categoryName", "korea");
        map.put("leagueName","korea");
    }
}
