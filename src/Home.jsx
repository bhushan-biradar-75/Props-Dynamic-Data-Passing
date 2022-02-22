import React from 'react'

const Home = (props) => {
    console.log(props.data)
    return (
        <>
        <h1 className='text-center' style={{fontSize:"2rem" , backgroundColor:'black' , color:'white' , fontFamily:'cursive'}}><marquee>Online Thali Order</marquee></h1>
        {
            props.data.map((ele,index)=>{
                return  <div className="container-fluid">
                    
                <div class="flex-container">
                    <div class="col-sm-4">
                        <div style={{width:"21rem"}} class="card my-2"> 
                            <div class="card-body">
                                <h5 className='text-center'>{ele.id}</h5>
                                <img className='card-img-top' src={ele.url} alt="" />
                                <h5 class="card-title">{ele.title}</h5>
                                <p class="card-text">{ele.desc}</p>
                                <h6 class="card-text">Rs {ele.price}</h6>
                                <a href="#" class="btn btn-primary">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            })

        }
        
        </>
    )
}

export default Home