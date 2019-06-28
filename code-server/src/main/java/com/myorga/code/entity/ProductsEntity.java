package com.myorga.code.entity;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Objects;

@Entity
@Table(name = "products", schema = "angulardb", catalog = "")
public class ProductsEntity {
    private int id;
    private String productCode;
    private String productName;
    private String description;
    private BigDecimal standardCost;
    private BigDecimal listPrice;
    private Integer targetLevel;
    private Integer reorderLevel;
    private Integer minimumReorderQuantity;
    private String quantityPerUnit;
    private byte discontinued;
    private String category;

    @Id
    @GeneratedValue
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "product_code")
    public String getProductCode() {
        return productCode;
    }

    public void setProductCode(String productCode) {
        this.productCode = productCode;
    }

    @Basic
    @Column(name = "product_name")
    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    @Basic
    @Column(name = "description")
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Basic
    @Column(name = "standard_cost")
    public BigDecimal getStandardCost() {
        return standardCost;
    }

    public void setStandardCost(BigDecimal standardCost) {
        this.standardCost = standardCost;
    }

    @Basic
    @Column(name = "list_price")
    public BigDecimal getListPrice() {
        return listPrice;
    }

    public void setListPrice(BigDecimal listPrice) {
        this.listPrice = listPrice;
    }

    @Basic
    @Column(name = "target_level")
    public Integer getTargetLevel() {
        return targetLevel;
    }

    public void setTargetLevel(Integer targetLevel) {
        this.targetLevel = targetLevel;
    }

    @Basic
    @Column(name = "reorder_level")
    public Integer getReorderLevel() {
        return reorderLevel;
    }

    public void setReorderLevel(Integer reorderLevel) {
        this.reorderLevel = reorderLevel;
    }

    @Basic
    @Column(name = "minimum_reorder_quantity")
    public Integer getMinimumReorderQuantity() {
        return minimumReorderQuantity;
    }

    public void setMinimumReorderQuantity(Integer minimumReorderQuantity) {
        this.minimumReorderQuantity = minimumReorderQuantity;
    }

    @Basic
    @Column(name = "quantity_per_unit")
    public String getQuantityPerUnit() {
        return quantityPerUnit;
    }

    public void setQuantityPerUnit(String quantityPerUnit) {
        this.quantityPerUnit = quantityPerUnit;
    }

    @Basic
    @Column(name = "discontinued")
    public byte getDiscontinued() {
        return discontinued;
    }

    public void setDiscontinued(byte discontinued) {
        this.discontinued = discontinued;
    }

    @Basic
    @Column(name = "category")
    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProductsEntity that = (ProductsEntity) o;
        return id == that.id &&
                discontinued == that.discontinued &&
                Objects.equals(productCode, that.productCode) &&
                Objects.equals(productName, that.productName) &&
                Objects.equals(description, that.description) &&
                Objects.equals(standardCost, that.standardCost) &&
                Objects.equals(listPrice, that.listPrice) &&
                Objects.equals(targetLevel, that.targetLevel) &&
                Objects.equals(reorderLevel, that.reorderLevel) &&
                Objects.equals(minimumReorderQuantity, that.minimumReorderQuantity) &&
                Objects.equals(quantityPerUnit, that.quantityPerUnit) &&
                Objects.equals(category, that.category);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, productCode, productName, description, standardCost, listPrice, targetLevel, reorderLevel, minimumReorderQuantity, quantityPerUnit, discontinued, category);
    }
}
