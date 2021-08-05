import React, { Component } from "react";
import './style.scss';


class ScrollToTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_visible: false,
        };
    }
    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function () {
            scrollComponent.toggleVisibility();
        });
    }
    toggleVisibility() {
        if (window.pageYOffset > 300) {
            this.setState({
                is_visible: true,
            });
        } else {
            this.setState({
                is_visible: false,
            });
        }
    }
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        const { is_visible } = this.state;
        return (
            <div>
                {is_visible && (
                    <div onClick={() => this.scrollToTop()}>
                        <div className='BackToTop'>
                            <a className='WrapContainer'>
                                <div className='ArrowContainer'>
                                    <div className='Arrow'></div>
                                </div>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
export default ScrollToTop;