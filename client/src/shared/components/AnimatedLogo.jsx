import logo from "@/assets/animated_logo.gif";

export default function AnimatedLogo(){
    return(
        <div
            style={{
                width: "80px",
                height: "100%",
                background: `url(${logo})`,
                backgroundPosition: "center bottom"
            }}
        ></div>
    )
}