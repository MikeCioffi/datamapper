import React, { useState } from "react";

function Results(props) {

    console.log('parsed data in results')
    console.log(props.parsedData)

    return <div className="flex justify-center flex-col">
        <div className="flex justify-between" >
            <div className="w-2/12">OLD</div>
            <div className=" m-2 flex w-10/12 justify-around">
                {props.rows.map((data, index) => {
                    return < div className=" p-4 bg-purple rounded-lg w-1/4" key={index} >
                        {data}
                    </div >
                })
                }
            </div>
        </div>

        <div className="flex justify-between" >
            <div className="w-2/12">NEW</div>
            <div className=" flex m-2 w-10/12 justify-around">
                {props.mappingData.map((data, index) => {
                    return < div className=" p-4 bg-blue rounded-lg w-1/4" key={index} >

                        {data}
                    </div >
                })
                }
            </div>
        </div>

        <div className="flex justify-between" >
            <div className="w-2/12">DATA</div>
            <div className="flex w-10/12 flex-col">
                {props.parsedData.map((data, index) => {
                    return <div className="flex w-full justify-around"> {data.map((row_data) => {
                        console.log(row_data)
                        return < div className='p-2 bg-purple-500 m-2 text-blue rounded-lg w-1/4' key={index} >
                            {row_data}

                        </div >

                    })}</div>

                })
                }
            </div>
        </div>
    </div>
}
export default Results;
