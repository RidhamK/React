import react, { Component } from "react";
import {Card,CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Media} from 'reactstrap';



class DishDetail extends Component{
    constructor(props){
        super(props);
        
        
    }
    onDishSelect(dish){
        this.setState({selectedDish: dish});
    }
    renderDish(dish){
            return(
                <div className="col-12 col-md-5 m-1">
                 <Card>
                    <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name}/>
                    <CardBody>
                        <CardTitle> 
                            {this.props.dish.name}
                        </CardTitle>

                    <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>   
                </div> 
            );
        }       
    renderComents(comments){
        if(comments != null)
        {
            const commentlist = comments.map((com)=>{
                return(
                    <li key={com.id}>
                        <p>{com.comment}</p>
                        <p>{com.author}, {com.date}</p>
                    </li>
                );  
            });
        return(
            <div className= "col-12 col-md-5 m-1">
                <h4>Comment</h4>
                <ul className="list-unstyled">
                    {commentlist}
                </ul>   
            </div>
        );
    }
    else{
        return(<div></div>);
    }
};
    render(){
        if(this.props.dish != null){
            return(
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    {this.renderComents(this.props.dish.comments)}
    
                </div>        
            );
        }
        else {
            return(<div></div>);
        }
        
    }
}

export default DishDetail;