import React, { Component } from 'react';
import ProductService from '../services/ProductService';
class ListProductComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: []
        };

        // Bind methods
        this.addProduct = this.addProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.viewProduct = this.viewProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    componentDidMount() {
        ProductService.getProducts()
            .then(function (res) {
                this.setState({ products: res.data });
            }.bind(this));
    }

    addProduct() {
        this.props.history.push('/add-product/_add');
    }

    editProduct(id) {
        this.props.history.push('/add-product/' + id);
    }

    viewProduct(id) {
        this.props.history.push('/view-product/' + id);
    }

    deleteProduct(id) {
        ProductService.deleteProduct(id)
            .then(function () {
                this.setState({
                    products: this.state.products.filter(
                        function (product) {
                            return product._id !== id;
                        }
                    )
                });
            }.bind(this));
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Products List</h2>

                <div className="row">
                    <button
                        className="btn btn-primary"
                        onClick={this.addProduct}
                    >
                        Add Product
                    </button>
                </div>

                <br />
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Product Price</th>
                                <th>Product Stock</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.products.map(
                                    function (product) {
                                        return (
                                            <tr key={product._id}>
                                                <td>{product.productname}</td>
                                                <td>{product.productprice}</td>
                                                <td>{product.productstock}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-info"
                                                        onClick={this.editProduct.bind(this, product._id)}
                                                    >
                                                        Update
                                                    </button>

                                                    <button
                                                        className="btn btn-danger"
                                                        style={{ marginLeft: "10px" }}
                                                        onClick={this.deleteProduct.bind(this, product._id)}
                                                    >
                                                        Delete
                                                    </button>

                                                    <button
                                                        className="btn btn-primary"
                                                        style={{ marginLeft: "10px" }}
                                                        onClick={this.viewProduct.bind(this, product._id)}
                                                    >
                                                        View
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    }.bind(this)
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListProductComponent;