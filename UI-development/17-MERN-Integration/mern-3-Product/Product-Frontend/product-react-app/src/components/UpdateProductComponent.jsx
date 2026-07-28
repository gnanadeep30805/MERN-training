import React, { Component } from 'react';
import ProductService from '../services/ProductService';

class UpdateProductComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            productname: '',
            productprice: '',
            productstock: ''
        };

        // Bind methods
        this.changeProductnameHandler = this.changeProductnameHandler.bind(this);
        this.changeProductpriceHandler = this.changeProductpriceHandler.bind(this);
        this.changeProductstockHandler = this.changeProductstockHandler.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    componentDidMount() {
        ProductService.getProductById(this.state.id)
            .then(function (res) {
                var product = res.data;
                this.setState({
                    productname: product.productname,
                    productprice: product.productprice,
                    productstock: product.productstock
                });
            }.bind(this));
    }
    updateProduct(e) {
        e.preventDefault();

        var product = {
            productname: this.state.productname,
            productprice: this.state.productprice,
            productstock: this.state.productstock
        };

        console.log('product => ' + JSON.stringify(product));
        console.log('id => ' + JSON.stringify(this.state.id));

        ProductService.updateProduct(product, this.state.id)
            .then(function () {
                this.props.history.push('/products');
            }.bind(this));
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

    render() {
        return (
            <div>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Product</h3>
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
                                        onClick={this.updateProduct}
                                    >
                                        Save
                                    </button>

                                    <button
                                        className="btn btn-danger"
                                        style={{ marginLeft: "10px" }}
                                        onClick={this.cancel}
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

export default UpdateProductComponent;