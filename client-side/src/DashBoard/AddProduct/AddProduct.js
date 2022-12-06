import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const AddProduct = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);

    const imageHostKEy = process.env.REACT_APP_IMGB_APIKEY;

    const handleAddProduct = (data) => {
        console.log(data);

        const photo = data.photo[0];
        const formData = new FormData();
        formData.append('image', photo);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKEy}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const product = {
                        productName: data.productName,
                        productCondition: data.productCondition,
                        purchaseYear: data.purchaseYear,
                        productCategory: data.productCategory,
                        description: data.description,
                        productImage: imgData.data.display_url,
                        originalPrice: data.originalPrice,
                        sellingPrice: data.sellingPrice,
                        sellerPhoneNumber: data.sellerPhoneNumber,
                        sellerName: data.sellerName,
                        sellerLocation: data.sellerLocation,
                        email: user.email
                    }
                    fetch('https://b612-used-products-resale-server-side-ten.vercel.app/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.acknowledged) {
                                toast.success(`Added to the database successfully`);
                                navigate('/dashboard/myproducts')
                            }
                        })
                    console.log(product)
                }
            })



    }
    return (
        <div className='grid justify-center py-11'>

            <div className='w-96 p-7'>
                <h2 className='text-3xl font bold text-center mt-11 mb-9'>Add product</h2>
                <form onSubmit={handleSubmit(handleAddProduct)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input
                            className="input input-bordered w-full max-w-xs" defaultValue={user?.displayName} {...register("sellerName", { required: 'Seller Name is required' })} type='text'
                        />
                    </div>
                    {errors.sellerName && <p role='alert' className="text-warning">{errors.sellerName.message}</p>}

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input
                            className="input input-bordered w-full max-w-xs" {...register("productName", { required: 'Name is required' })} type='text'
                        />
                    </div>
                    {errors.productName && <p role='alert' className="text-warning">{errors.productName.message}</p>}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            className="input input-bordered w-full max-w-xs" {...register("sellingPrice", { required: 'Price is required' })} type='text'
                        />
                    </div>
                    {errors.sellingPrice && <p role='alert' className="text-warning">{errors.sellingPrice.message}</p>}


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Original Price</span>
                        </label>
                        <input
                            className="input input-bordered w-full max-w-xs" {...register("originalPrice", { required: 'Original price is required' })} type='text'
                        />
                    </div>
                    {errors.originalPrice && <p role='alert' className="text-warning">{errors.originalPrice.message}</p>}



                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Location</span>
                        </label>
                        <input
                            className="input input-bordered w-full max-w-xs" {...register("sellerLocation", { required: 'Location is required' })} type='text'
                        />
                    </div>
                    {errors.sellerLocation && <p role='alert' className="text-warning">{errors.sellerLocation.message}</p>}





                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Condition</span>
                        </label>
                        <input
                            className="input input-bordered w-full max-w-xs" {...register("productCondition", { required: 'Condition is required' })} type='text'
                        />
                    </div>
                    {errors.productCondition && <p role='alert' className="text-warning">{errors.productCondition.message}</p>}

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Phone number</span>
                        </label>
                        <input
                            className="input input-bordered w-full max-w-xs" {...register("sellerPhoneNumber", { required: 'Phone number is required' })} type='text'
                        />
                    </div>
                    {errors.sellerPhoneNumber && <p role='alert' className="text-warning">{errors.sellerPhoneNumber.message}</p>}


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Select your picture</span>
                        </label>
                        <input
                            className="input w-full max-w-xs" {...register("photo", { required: 'Photo is required' })} type='file'
                        />
                    </div>
                    {errors.photo && <p role='alert' className="text-warning">{errors.photo.message}</p>}


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Select a Category</span>
                        </label>
                        <select className="select input-bordered w-full max-w-xs" {...register("productCategory", { required: 'Category is required' })}>
                            <option disabled selected value="kitchen">Kitchen</option>
                            <option value="dining">Dining</option>
                            <option value="living">Living</option>
                        </select>
                    </div>


                    {errors.productCategory && <p role='alert' className="text-warning">{errors.productCategory.message}</p>}


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Year of purchase</span>
                        </label>
                        <input
                            className="input input-bordered w-full max-w-xs" {...register("purchaseYear", { required: 'Year of purchase is required' })} type='text'
                        />
                    </div>
                    {errors.purchaseYear && <p role='alert' className="text-warning">{errors.purchaseYear.message}</p>}


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input
                            className="input input-bordered w-full max-w-xs" {...register("description", { required: 'Description is required' })} type='text'
                        />
                    </div>
                    {errors.description && <p role='alert' className="text-warning">{errors.description.message}</p>}



                    <input className="btn bg-amber-900 text-white w-1/2 my-4" value='Add Product' type="submit" />


                </form>

            </div>
        </div>
    );
};

export default AddProduct;