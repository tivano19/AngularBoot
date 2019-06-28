package com.myorga.code.entity;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "order_items", schema = "angulardb", catalog = "")
@IdClass(OrderItemsEntityPK.class)
public class OrderItemsEntity {
    private int orderId;
    private int productId;
    private BigDecimal quantity;
    private BigDecimal unitPrice;
    private BigDecimal discount;
    private String orderItemStatus;
    private Timestamp dateAllocated;

    @Id
    @GeneratedValue
    @Column(name = "order_id")
    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    @Id
    @Column(name = "product_id")
    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    @Basic
    @Column(name = "quantity")
    public BigDecimal getQuantity() {
        return quantity;
    }

    public void setQuantity(BigDecimal quantity) {
        this.quantity = quantity;
    }

    @Basic
    @Column(name = "unit_price")
    public BigDecimal getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(BigDecimal unitPrice) {
        this.unitPrice = unitPrice;
    }

    @Basic
    @Column(name = "discount")
    public BigDecimal getDiscount() {
        return discount;
    }

    public void setDiscount(BigDecimal discount) {
        this.discount = discount;
    }

    @Basic
    @Column(name = "order_item_status")
    public String getOrderItemStatus() {
        return orderItemStatus;
    }

    public void setOrderItemStatus(String orderItemStatus) {
        this.orderItemStatus = orderItemStatus;
    }

    @Basic
    @Column(name = "date_allocated")
    public Timestamp getDateAllocated() {
        return dateAllocated;
    }

    public void setDateAllocated(Timestamp dateAllocated) {
        this.dateAllocated = dateAllocated;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        OrderItemsEntity that = (OrderItemsEntity) o;
        return orderId == that.orderId &&
                productId == that.productId &&
                Objects.equals(quantity, that.quantity) &&
                Objects.equals(unitPrice, that.unitPrice) &&
                Objects.equals(discount, that.discount) &&
                Objects.equals(orderItemStatus, that.orderItemStatus) &&
                Objects.equals(dateAllocated, that.dateAllocated);
    }

    @Override
    public int hashCode() {
        return Objects.hash(orderId, productId, quantity, unitPrice, discount, orderItemStatus, dateAllocated);
    }
}
