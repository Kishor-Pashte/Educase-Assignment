import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="w-full h-full flex p-5">
      <div className="mt-auto">
        <div
          data-html2canvas-ignore="true"
          className="_2nWnjq7kj-M6XmfWMyI_f- ccx-annotation"
          data-annotationid="/assets/urn:aaid:sc:US:b68eea25-003d-4a5d-8fdd-d463eeb20b32/annots/36d3b7de-0f8f-4f1c-900c-293c793b4178"
          data-annotationtype="pin"
          style={{
            borderRadius: "100%",
            height: "28px",
            lineHeight: "34px",
            left: "420.315px",
            top: "154.2043px",
            width: "28px",
            position: "absolute",
            backgroundColor: "#E7B000",
          }}
        >
          <span
            style={{
              color: "white",
              position: "absolute",
              left: "10px",
              bottom: "-4px",
            }}
          >
            1
          </span>
        </div>
        <div
          data-html2canvas-ignore="true"
          className="_2nWnjq7kj-M6XmfWMyI_f- ccx-annotation"
          data-annotationid="/assets/urn:aaid:sc:US:b68eea25-003d-4a5d-8fdd-d463eeb20b32/annots/36d3b7de-0f8f-4f1c-900c-293c793b4178"
          data-annotationtype="pin"
          style={{
            borderRadius: "100%",
            height: "28px",
            lineHeight: "34px",
            left: "400.315px",
            top: "205.2043px",
            width: "28px",
            position: "absolute",
            backgroundColor: "#E7B000",
          }}
        >
          <span
            style={{
              color: "white",
              position: "absolute",
              left: "10px",
              bottom: "-4px",
            }}
          >
            2
          </span>
        </div>

        <div
          data-html2canvas-ignore="true"
          className="_2nWnjq7kj-M6XmfWMyI_f- ccx-annotation"
          data-annotationid="/assets/urn:aaid:sc:US:b68eea25-003d-4a5d-8fdd-d463eeb20b32/annots/36d3b7de-0f8f-4f1c-900c-293c793b4178"
          data-annotationtype="pin"
          style={{
            borderRadius: "100%",
            height: "28px",
            lineHeight: "34px",
            left: "410.315px",
            top: "240.2043px",
            width: "28px",
            position: "absolute",
            backgroundColor: "#E7B000",
          }}
        >
          <span
            style={{
              color: "white",
              position: "absolute",
              left: "10px",
              bottom: "-4px",
            }}
          >
            3
          </span>
        </div>

        <Heading content="Welcome to PopX" />
        <p className="text-primary opacity-[.6] pr-[85px] mb-7 text-[18px] leading-[26px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <Link to="/signup">
          <Button
            name={"Create Account"}
            type="button"
            category={"primary"}
            disabled={false}
          />
        </Link>
        <Link to="/login">
          <Button
            name={"Already Registered? Login"}
            type="button"
            category={"secondary"}
            disabled={false}
          />
        </Link>
      </div>
    </div>
  );
}
