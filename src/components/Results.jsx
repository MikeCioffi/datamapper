import React, { useState } from "react";

function Results(props) {

    console.log('parsed data in results')
    console.log(props.parsedData)

    return <div className="flex justify-center flex-col">
        <div className="flex justify-center" >
            <h2>OLD</h2>
            {props.rows.map((data, index) => {
                return < div className="w-4/12" key={index} >
                    {data}
                </div >
            })
            }
        </div>

        <div className="flex justify-center" >
            <div>NEW</div>
            {props.mappingData.map((data, index) => {
                return < div className="w-4/12" key={index} >

                    {data}
                </div >
            })
            }
        </div>

        <div className="flex justify-around" >
            <h2>DATA</h2>
            <div className="flex w-full flex-col">
                {props.parsedData.map((data, index) => {
                    return <div className="flex w-full"> {data.map((row_data) => {
                        console.log(row_data)
                        return < div className='w-4/12' key={index} >
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
