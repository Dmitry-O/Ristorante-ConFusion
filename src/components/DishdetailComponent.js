import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class Dishdetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
     
        };
    }

    renderComments(comments)  {
        if (comments == null || comments.length === 0)
            return (
                <div></div>
            );
        const renderedComments = this.props.comments.map((comment) => {
            return (
                <li>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </li>
            );
        });

        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {renderedComments}
                </ul>
            </div>
        );
    }

    renderDish(dish) {
        return (
        <Card>
            <CardImg width="100%" src = {dish.image} alt = {dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody> 
        </Card>
        );
    }

    render() {
        if (this.props.dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.comments)}
                    </div>
                </div>
            );
        }
        
        else return (<div></div>);
    }
}

export default Dishdetail;