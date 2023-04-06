import React,{Component} from "react";
class List extends Component{
    render()
 {
    const {name,dept,gpa,btntxt}=this.props;
    return(
        <div>
            <ul>
                <li> Name :{name} </li>
                <li>  Department:{dept} </li>
                <li>   GPA:{gpa}</li>

                <li> <button>{btntxt}</button>  </li>

            </ul>
        </div>
    )
 }
}
export default List ;