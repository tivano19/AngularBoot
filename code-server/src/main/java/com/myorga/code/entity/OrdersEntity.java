package com.myorga.code.entity;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "orders", schema = "angulardb", catalog = "")
public class OrdersEntity {
    private int id;
    private Timestamp orderDate;
    private Timestamp shippedDate;
    private String shipName;
    private String shipAddress1;
    private String shipAddress2;
    private String shipCity;
    private String shipState;
    private String shipPostalCode;
    private String shipCountry;
    private BigDecimal shippingFee;
    private String paymentType;
    private Timestamp paidDate;
    private String orderStatus;

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
    @Column(name = "order_date")
    public Timestamp getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Timestamp orderDate) {
        this.orderDate = orderDate;
    }

    @Basic
    @Column(name = "shipped_date")
    public Timestamp getShippedDate() {
        return shippedDate;
    }

    public void setShippedDate(Timestamp shippedDate) {
        this.shippedDate = shippedDate;
    }

    @Basic
    @Column(name = "ship_name")
    public String getShipName() {
        return shipName;
    }

    public void setShipName(String shipName) {
        this.shipName = shipName;
    }

    @Basic
    @Column(name = "ship_address1")
    public String getShipAddress1() {
        return shipAddress1;
    }

    public void setShipAddress1(String shipAddress1) {
        this.shipAddress1 = shipAddress1;
    }

    @Basic
    @Column(name = "ship_address2")
    public String getShipAddress2() {
        return shipAddress2;
    }

    public void setShipAddress2(String shipAddress2) {
        this.shipAddress2 = shipAddress2;
    }

    @Basic
    @Column(name = "ship_city")
    public String getShipCity() {
        return shipCity;
    }

    public void setShipCity(String shipCity) {
        this.shipCity = shipCity;
    }

    @Basic
    @Column(name = "ship_state")
    public String getShipState() {
        return shipState;
    }

    public void setShipState(String shipState) {
        this.shipState = shipState;
    }

    @Basic
    @Column(name = "ship_postal_code")
    public String getShipPostalCode() {
        return shipPostalCode;
    }

    public void setShipPostalCode(String shipPostalCode) {
        this.shipPostalCode = shipPostalCode;
    }

    @Basic
    @Column(name = "ship_country")
    public String getShipCountry() {
        return shipCountry;
    }

    public void setShipCountry(String shipCountry) {
        this.shipCountry = shipCountry;
    }

    @Basic
    @Column(name = "shipping_fee")
    public BigDecimal getShippingFee() {
        return shippingFee;
    }

    public void setShippingFee(BigDecimal shippingFee) {
        this.shippingFee = shippingFee;
    }

    @Basic
    @Column(name = "payment_type")
    public String getPaymentType() {
        return paymentType;
    }

    public void setPaymentType(String paymentType) {
        this.paymentType = paymentType;
    }

    @Basic
    @Column(name = "paid_date")
    public Timestamp getPaidDate() {
        return paidDate;
    }

    public void setPaidDate(Timestamp paidDate) {
        this.paidDate = paidDate;
    }

    @Basic
    @Column(name = "order_status")
    public String getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(String orderStatus) {
        this.orderStatus = orderStatus;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        OrdersEntity that = (OrdersEntity) o;
        return id == that.id &&
                Objects.equals(orderDate, that.orderDate) &&
                Objects.equals(shippedDate, that.shippedDate) &&
                Objects.equals(shipName, that.shipName) &&
                Objects.equals(shipAddress1, that.shipAddress1) &&
                Objects.equals(shipAddress2, that.shipAddress2) &&
                Objects.equals(shipCity, that.shipCity) &&
                Objects.equals(shipState, that.shipState) &&
                Objects.equals(shipPostalCode, that.shipPostalCode) &&
                Objects.equals(shipCountry, that.shipCountry) &&
                Objects.equals(shippingFee, that.shippingFee) &&
                Objects.equals(paymentType, that.paymentType) &&
                Objects.equals(paidDate, that.paidDate) &&
                Objects.equals(orderStatus, that.orderStatus);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, orderDate, shippedDate, shipName, shipAddress1, shipAddress2, shipCity, shipState, shipPostalCode, shipCountry, shippingFee, paymentType, paidDate, orderStatus);
    }
}
