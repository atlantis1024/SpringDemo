package io.github.dunwu.spring.orm.entity;

public class Product {

    /**
     * This field was generated by MyBatis Generator. This field corresponds to the database column product.id
     * @mbg.generated
     */
    private Integer id;

    /**
     * This field was generated by MyBatis Generator. This field corresponds to the database column product.name
     * @mbg.generated
     */
    private String name;

    /**
     * This field was generated by MyBatis Generator. This field corresponds to the database column product.price
     * @mbg.generated
     */
    private Float price;

    /**
     * This method was generated by MyBatis Generator. This method returns the value of the database column product.id
     * @return the value of product.id
     * @mbg.generated
     */
    public Integer getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator. This method sets the value of the database column product.id
     * @param id the value for product.id
     * @mbg.generated
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * This method was generated by MyBatis Generator. This method returns the value of the database column
     * product.name
     * @return the value of product.name
     * @mbg.generated
     */
    public String getName() {
        return name;
    }

    /**
     * This method was generated by MyBatis Generator. This method sets the value of the database column product.name
     * @param name the value for product.name
     * @mbg.generated
     */
    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    /**
     * This method was generated by MyBatis Generator. This method returns the value of the database column
     * product.price
     * @return the value of product.price
     * @mbg.generated
     */
    public Float getPrice() {
        return price;
    }

    /**
     * This method was generated by MyBatis Generator. This method sets the value of the database column product.price
     * @param price the value for product.price
     * @mbg.generated
     */
    public void setPrice(Float price) {
        this.price = price;
    }

}
