import { Power4 } from "gsap";
import React from "react";
import ResizeObserver from "resize-observer-polyfill";
import {gsap} from "gsap";

export default class SmoothScroll extends React.Component {
    constructor(props: never) {
        super(props);
        this.state = {
            height: 0
        };
        this.viewport = React.createRef();
        this.fake = React.createRef();
    }

    ro = new ResizeObserver(elements => {
        for (const elem of elements) {
            const crx = elem.contentRect;
            this.setState({
                height: crx.height
            });
        }
    });

    componentDidMount() {
        if (typeof window !== "undefined") {
            this.setState({
                height: window.innerHeight
            });
            window.addEventListener("scroll", this.onScroll);
            this.ro.observe(this.viewport.current);
        }
    }

    componentWillUnmount() {
        if (typeof window !== "undefined") {
            window.removeEventListener("scroll", this.onScroll);
            this.ro.disconnect();
        }
    }

    onScroll = () => {
        gsap.to(this.viewport.current, 2, {
            y: -window.pageYOffset,
            ease: Power4.easeOut
        });
    };

    render() {
        return (
            <>
                <div className="cursor"></div>
                <div className="cursor2"></div>
                <div className="viewport" ref={this.viewport}>
                    {this.props.children}
                </div>
                <div
                    ref={this.fake}
                    style={{
                        height: this.state.height
                    }}
                />
            </>
        );
    }
}
