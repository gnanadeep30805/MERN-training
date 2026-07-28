import React, { Component } from 'react';
import ProductService from '../services/ProductService';

class CreateProductComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            productname: '',
            productprice: '',
            productstock: ''
        };

        // Manual binding
        this.changeProductnameHandler = this.changeProductnameHandler.bind(this);
        this.changeProductpriceHandler = this.changeProductpriceHandler.bind(this);
        this.changeProductstockHandler = this.changeProductstockHandler.bind(this);
        this.saveOrUpdateProduct = this.saveOrUpdateProduct.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    componentDidMount() {
        if (this.state.id === '_add') {
            return;
        } else {
            ProductService.getProductById(this.state.id)
                .then(function (res) {
                    var product = res.data;
                    this.setState({
                        productname: product.productname,
                        productprice: product.productprice,
                        productstock: product.productstock
                    });
                }.bind(this)); // important binding
        }
    }

    saveOrUpdateProduct(e) {
        e.preventDefault();

        var product = {
            productname: this.state.productname,
            productprice: this.state.productprice,
            productstock: this.state.productstock
        };

        console.log("product => " + JSON.stringify(product));

        if (this.state.id === '_add') {
            ProductService.createProduct(product)
                .then(function () {
                    this.props.history.push('/products');
                }.bind(this));
        } else {
            ProductService.updateProduct(product, this.state.id)
                .then(function () {
                    this.props.history.push('/products');
                }.bind(this));
        }
    }

    changeProductnameHandler(event) {
        this.setState({ productname: event.target.value });
    }

    changeProductpriceHandler(event) {
        this.setState({ productprice: event.target.value });
    }

    changeProductstockHandler(event) {
        this.setState({ productstock: event.target.value });
    }

    cancel() {
        this.props.history.push('/products');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Product</h3>;
        } else {
            return <h3 className="text-center">Update Product</h3>;
        }
    }

    render() {
        return (
            <div>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {this.getTitle()}
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Product Name: </label>
                                        <input
                                            placeholder="Product Name"
                                            name="productname"
                                            className="form-control"
                                            value={this.state.productname}
                                            onChange={this.changeProductnameHandler}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label> Product Price: </label>
                                        <input
                                            placeholder="Product Price"
                                            name="productprice"
                                            className="form-control"
                                            value={this.state.productprice}
                                            onChange={this.changeProductpriceHandler}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label> Product Stock: </label>
                                        <input
                                            placeholder="Product Stock"
                                            name="productstock"
                                            className="form-control"
                                            value={this.state.productstock}
                                            onChange={this.changeProductstockHandler}
                                        />
                                    </div>

                                    <button
                                        className="btn btn-success"
                                        onClick={this.saveOrUpdateProduct}
                                    >
                                        Save
                                    </button>

                                    <button
                                        className="btn btn-danger"
                                        onClick={this.cancel}
                                        style={{ marginLeft: "10px" }}
                                    >
                                        Cancel
                                    </button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateProductComponent;