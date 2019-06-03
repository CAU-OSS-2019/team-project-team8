package net.novaborn.living.app.modular.setting.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

import static com.baomidou.mybatisplus.annotation.IdType.INPUT;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class Setting implements Serializable {
    private static final long serialVersionUID = -8796004007601112135L;

    @TableId(value = "`key`", type = INPUT)
    private String key;

    @TableField("`value`")
    private String value;
}