package com.myorga.code.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "user", schema = "angulardb", catalog = "")
public class UserEntity {
    private String userId;
    private String password;
    private String firstName;
    private String lastName;
    private String email;
    private Integer securityProviderId;
    private Integer defaultCustomerId;
    private String company;
    private String phone;
    private String address1;
    private String address2;
    private String country;
    private String postal;
    private String role;
    private String otherRoles;
    private Byte isActive;
    private Byte isBlocked;
    private String secretQuestion;
    private String secretAnswer;
    private Byte enableBetaTesting;
    private Byte enableRenewal;

    @Id
    @GeneratedValue
    @Column(name = "user_id")
    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    @Basic
    @Column(name = "password")
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Basic
    @Column(name = "first_name")
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    @Basic
    @Column(name = "last_name")
    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @Basic
    @Column(name = "email")
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Basic
    @Column(name = "security_provider_id")
    public Integer getSecurityProviderId() {
        return securityProviderId;
    }

    public void setSecurityProviderId(Integer securityProviderId) {
        this.securityProviderId = securityProviderId;
    }

    @Basic
    @Column(name = "default_customer_id")
    public Integer getDefaultCustomerId() {
        return defaultCustomerId;
    }

    public void setDefaultCustomerId(Integer defaultCustomerId) {
        this.defaultCustomerId = defaultCustomerId;
    }

    @Basic
    @Column(name = "company")
    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    @Basic
    @Column(name = "phone")
    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    @Basic
    @Column(name = "address1")
    public String getAddress1() {
        return address1;
    }

    public void setAddress1(String address1) {
        this.address1 = address1;
    }

    @Basic
    @Column(name = "address2")
    public String getAddress2() {
        return address2;
    }

    public void setAddress2(String address2) {
        this.address2 = address2;
    }

    @Basic
    @Column(name = "country")
    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    @Basic
    @Column(name = "postal")
    public String getPostal() {
        return postal;
    }

    public void setPostal(String postal) {
        this.postal = postal;
    }

    @Basic
    @Column(name = "role")
    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    @Basic
    @Column(name = "other_roles")
    public String getOtherRoles() {
        return otherRoles;
    }

    public void setOtherRoles(String otherRoles) {
        this.otherRoles = otherRoles;
    }

    @Basic
    @Column(name = "is_active")
    public Byte getIsActive() {
        return isActive;
    }

    public void setIsActive(Byte isActive) {
        this.isActive = isActive;
    }

    @Basic
    @Column(name = "is_blocked")
    public Byte getIsBlocked() {
        return isBlocked;
    }

    public void setIsBlocked(Byte isBlocked) {
        this.isBlocked = isBlocked;
    }

    @Basic
    @Column(name = "secret_question")
    public String getSecretQuestion() {
        return secretQuestion;
    }

    public void setSecretQuestion(String secretQuestion) {
        this.secretQuestion = secretQuestion;
    }

    @Basic
    @Column(name = "secret_answer")
    public String getSecretAnswer() {
        return secretAnswer;
    }

    public void setSecretAnswer(String secretAnswer) {
        this.secretAnswer = secretAnswer;
    }

    @Basic
    @Column(name = "enable_beta_testing")
    public Byte getEnableBetaTesting() {
        return enableBetaTesting;
    }

    public void setEnableBetaTesting(Byte enableBetaTesting) {
        this.enableBetaTesting = enableBetaTesting;
    }

    @Basic
    @Column(name = "enable_renewal")
    public Byte getEnableRenewal() {
        return enableRenewal;
    }

    public void setEnableRenewal(Byte enableRenewal) {
        this.enableRenewal = enableRenewal;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserEntity that = (UserEntity) o;
        return Objects.equals(userId, that.userId) &&
                Objects.equals(password, that.password) &&
                Objects.equals(firstName, that.firstName) &&
                Objects.equals(lastName, that.lastName) &&
                Objects.equals(email, that.email) &&
                Objects.equals(securityProviderId, that.securityProviderId) &&
                Objects.equals(defaultCustomerId, that.defaultCustomerId) &&
                Objects.equals(company, that.company) &&
                Objects.equals(phone, that.phone) &&
                Objects.equals(address1, that.address1) &&
                Objects.equals(address2, that.address2) &&
                Objects.equals(country, that.country) &&
                Objects.equals(postal, that.postal) &&
                Objects.equals(role, that.role) &&
                Objects.equals(otherRoles, that.otherRoles) &&
                Objects.equals(isActive, that.isActive) &&
                Objects.equals(isBlocked, that.isBlocked) &&
                Objects.equals(secretQuestion, that.secretQuestion) &&
                Objects.equals(secretAnswer, that.secretAnswer) &&
                Objects.equals(enableBetaTesting, that.enableBetaTesting) &&
                Objects.equals(enableRenewal, that.enableRenewal);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, password, firstName, lastName, email, securityProviderId, defaultCustomerId, company, phone, address1, address2, country, postal, role, otherRoles, isActive, isBlocked, secretQuestion, secretAnswer, enableBetaTesting, enableRenewal);
    }
}
