/* eslint-disable jsx-a11y/alt-text */
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React, { useEffect, useCallback, useState, useRef } from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
// import AdsClickSharpIcon from "@mui/icons-material/AdsClickSharp";
import ReactFlow, {
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  Background,
  Controls,
  // useReactFlow,
  // useNodes,
  Handle,
  Position,
  updateEdge,
  // addEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import { TextField } from "@mui/material";
// import ConnectionLine from "./ConnectionLine";
import CustomNode from "./CustomNode";
import CustomeMSGnode from "../Sendmessagenode/CustomeMSGnode";
import CustomCollactionnode from "../Collactioninputnode/CustomCollactionnode";
import CustomButtonnode from "../Buttoninputnode/CustomButtonnode";
import Flowmsg from "./Flowmsg.json";
const initialEdges = [];
const nodeTypes = {
  custom: CustomNode,
  custom1: CustomeMSGnode,
  custom2: CustomCollactionnode,
  custom3: CustomButtonnode,
};

const SaveRestore = () => {
  const nodeId = "1";
  const initialNodes = [
    {
      id: nodeId,
      type: "custom",
      data: {
        label: (
          <>
            <div
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <strong className="text-center">Bot is triggered if…</strong>
            </div>
            <img
              src="https://cdn.wotnot.io/static/img/bot-builder/start-here.svg"
              className="absolute   bottom-0  text-bold"
              style={{
                position: "absolute",
                left: "-93px",
                width: "94px",
                height: "52px",
                right: "50px",
                top: "-30px",
                cursor: "default",
              }}
            />
            <div className="dropdown static">
              <span
                className="btn btn-secondary bg-primary item w-16 "
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Handle
                  type="source"
                  position={Position.Bottom}
                  className="!bg-blue-500 rounded-full w-5 h-5  flex justify-center items-center"
                >
                  <AddCircleOutlineOutlinedIcon color="white" />
                </Handle>
              </span>

              <div className="boxd  dropdown-menu">
                <div style={{ width: "320px" }}>
                  <div className="_3r_cjv5qLAZXJ0yxuenAFr">
                    <div className="serch">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1024 1024"
                        height="24"
                        width="40"
                        id="Search_Left_svg__Search_Left"
                        style={{ marginLeft: "2px" }}
                      >
                        <path
                          fill="currentColor"
                          d="M832 772.267 712.533 652.8l-4.267-4.267c38.4-51.2 59.733-110.933 59.733-179.2 0-166.4-132.267-298.667-298.667-298.667S170.665 302.933 170.665 469.333 302.932 768 469.332 768c68.267 0 128-21.333 179.2-59.733 0 0 0 4.267 4.267 4.267l119.467 119.467c8.533 8.533 21.333 12.8 29.867 12.8s21.333-4.267 29.867-12.8c17.067-17.067 17.067-42.667 0-59.733zm-362.667-89.6C349.866 682.667 256 588.8 256 469.334s93.867-213.333 213.333-213.333 213.333 93.867 213.333 213.333c0 119.467-93.867 213.333-213.333 213.333z"
                        ></path>
                      </svg>

                      <input
                        type="text"
                        id="kt_filter_search"
                        className="inpt"
                      />
                    </div>
                  </div>

                  <div className="dropdown-item">
                    {/* <div className="drope_scroll"> */}
                    <div
                      className="item_massage"
                      onClick={() => handleSendMessage(nodeId)}
                    >
                      <span className="item_icon">
                        <svg
                          viewBox="0 0 1024 1024"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          style={{ marginBottom: "1px" }}
                        >
                          <path
                            fill="#e4fafb"
                            d="M213.333 85.333h597.333c46.933 0 85.333 38.4 85.333 85.333v426.667c0 46.933-38.4 85.333-85.333 85.333H345.599l-217.6 170.667V170.666c0-46.933 38.4-85.333 85.333-85.333zm298.667 768h341.333z"
                          ></path>
                          <path
                            fill="#34b8ca"
                            d="M128 896c-4.267 0-12.8 0-17.067-4.267-17.067-8.533-25.6-21.333-25.6-38.4V170.666c0-72.533 55.467-128 128-128h597.333c72.533 0 128 55.467 128 128v426.667c0 72.533-55.467 128-128 128h-448l-204.8 162.133c-12.8 4.267-21.333 8.533-29.867 8.533zm85.333-768c-25.6 0-42.667 17.067-42.667 42.667V768l149.333-115.2c8.533-8.533 17.067-12.8 25.6-12.8h465.067c25.6 0 42.667-17.067 42.667-42.667V170.666c0-25.6-17.067-42.667-42.667-42.667H213.333zm640 768H512c-25.6 0-42.667-17.067-42.667-42.667S486.4 810.666 512 810.666h341.333c25.6 0 42.667 17.067 42.667 42.667S878.933 896 853.333 896z"
                          ></path>
                        </svg>
                      </span>
                      <div className="massage_ineside">
                        <div> Send message</div>
                      </div>
                    </div>
                    <hr className="_1UHWnDVQz6IlE8BesuorIf" />
                    <div
                      className="item_massage"
                      onClick={() => handleSendOption(nodeId)}
                    >
                      <span className="item_icon">
                        <svg
                          viewBox="0 0 1024 1024"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          style={{ marginb: "1px" }}
                        >
                          <path
                            fill="#fff6d9"
                            d="M98.133 209.067h853.333V422.4H98.133V209.067zM98.133 635.733h853.333v213.333H98.133V635.733z"
                          ></path>
                          <path
                            fill="#f5be4f"
                            d="M938.667 896H85.334c-25.6 0-42.667-17.067-42.667-42.667V640c0-25.6 17.067-42.667 42.667-42.667h853.333c25.6 0 42.667 17.067 42.667 42.667v213.333c0 25.6-17.067 42.667-42.667 42.667z"
                          ></path>
                          <path
                            fill="#fff6d9"
                            d="M128 682.667h768v128H128v-128z"
                          ></path>
                          <path
                            fill="#f5be4f"
                            d="M938.667 469.333H85.334c-25.6 0-42.667-17.067-42.667-42.667V213.333c0-25.6 17.067-42.667 42.667-42.667h853.333c25.6 0 42.667 17.067 42.667 42.667v213.333c0 25.6-17.067 42.667-42.667 42.667z"
                          ></path>
                          <path
                            fill="#fff6d9"
                            d="M128 256h768v128H128V256z"
                          ></path>
                        </svg>
                      </span>
                      <div className="massage_ineside">
                        <div>Buttons</div>
                      </div>
                    </div>
                    <hr className="_1UHWnDVQz6IlE8BesuorIf" />
                    <div
                      className="_2iAfv3Hqk3Qc1p1B7CMlj3"
                      // data-dropdown-dialog-type="input"
                      onClick={() => handlecollectInput(nodeId)}
                    >
                      <span className="_373Z-i0F05J4tLu4remMBs undefined">
                        <svg
                          viewBox="0 0 1024 1024"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          style={{ marginBottom: "1px" }}
                        >
                          <path
                            fill="#e7f5fe"
                            d="M128 341.333h768v341.333H128V341.333z"
                          ></path>
                          <path
                            fill="rgba(20,150,215,1)"
                            d="M896 768H597.333c-25.6 0-42.667-17.067-42.667-42.667s17.067-42.667 42.667-42.667h256V341.333h-256c-25.6 0-42.667-17.067-42.667-42.667s17.067-42.667 42.667-42.667H896c25.6 0 42.667 17.067 42.667 42.667v426.667C938.667 750.933 921.6 768 896 768zm-640 0H128c-25.6 0-42.667-17.067-42.667-42.667V298.666c0-25.6 17.067-42.667 42.667-42.667h128c25.6 0 42.667 17.067 42.667 42.667S281.6 341.333 256 341.333h-85.333v341.333H256c25.6 0 42.667 17.067 42.667 42.667S281.6 768 256 768z"
                          ></path>
                          <path
                            fill="#ffffff"
                            d="M448 170.667v682.667zM341.333 853.333h213.333zm0-682.666h213.333z"
                          ></path>
                          <path
                            fill="rgba(20,150,215,1)"
                            d="M554.667 896H341.334c-25.6 0-42.667-17.067-42.667-42.667s17.067-42.667 42.667-42.667h64V213.333h-64c-25.6 0-42.667-17.067-42.667-42.667s17.067-42.667 42.667-42.667h213.333c25.6 0 42.667 17.067 42.667 42.667s-17.067 42.667-42.667 42.667h-64v597.333h64c25.6 0 42.667 17.067 42.667 42.667S580.267 896 554.667 896z"
                          ></path>
                        </svg>
                      </span>
                      <div className="_1xQdQFJcwMnQPogQf3-XYa">
                        <div>Collect Input</div>
                      </div>
                    </div>
                    <hr className="_1UHWnDVQz6IlE8BesuorIf" />
                    {/* </div> */}
                    {/* <div
                      className="_1-XwhNZYDKmRBA_lAaVJLX"
                      style={{
                        position: "absolute",
                        visibility: "visible",
                      }}
                    >
                      <div
                        className="_1ydVj8TM7vlS69V634PKCm"
                        style={{
                          position: "relative",
                          display: "block",
                          height: "43px",
                          transform: "translateY(0px)",
                        }}
                      ></div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </>
        ),

        Icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 40 40"
          >
            <circle
              data-name="Ellipse 692"
              cx="20"
              cy="20"
              r="20"
              style={{ fill: "rgb(255, 240, 245)" }}
            ></circle>
            <path
              data-name="Path 1531"
              d="m12 11 7.1 17 2.5-7.4 7.4-2.5Z"
              style={{ fillRule: "evenodd", fill: "rgb(255, 240, 245)" }}
            ></path>
            <path
              data-name="Path 1532"
              d="m29.4 17.1-17-7.1a.982.982 0 0 0-1.3 1.3l7.1 17a.961.961 0 0 0 .9.6.961.961 0 0 0 .9-.7l2-5.9 5.3 5.3a.967.967 0 0 0 1.4 0 .967.967 0 0 0 0-1.4L23.4 21l5.9-2a.961.961 0 0 0 .7-.9 1.326 1.326 0 0 0-.6-1Zm-8.1 2.5a.9.9 0 0 0-.6.6L19 25.1l-5.1-12.3L26.1 18Z"
              fill="rgba(254,3,3,1)"
            ></path>
          </svg>
        ),
        // <AdsClickSharpIcon color="error" />
      },
      position: { x: 645, y: 150 },
    },
  ];

  const edgeUpdateSuccessful = useRef(true);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [singleNode, setSingleNode] = useState({});
  const [reload, setReload] = useState(false);

  // const [nodeName, setNodeName] = useState("");

  const [editors, setEditors] = useState([{ id: 1 }]);
  // ck editer addd
  const addEditor = () => {
    const newEditorId = editors.length + 2;
    setEditors([...editors, { id: newEditorId }]);
  };

  // ck editer remove
  const removeEditor = (id) => {
    const updatedEditors = editors.filter((editor) => editor.id !== id);
    setEditors(updatedEditors);
  };

  // new save data json formate
  const [nodeName, setNodeName] = useState(""); // State for TextField value
  const [editorValues, setEditorValues] = useState([]); // State for CKEditor values

  const handleTextFieldChange = (evt) => {
    setNodeName(evt.target.value);
  };

  const handleEditorChange = (editorId, content) => {
    // Update the editorValues state with the new content
    const updatedEditorValues = [...editorValues];
    updatedEditorValues[editorId] = content;
    setEditorValues(updatedEditorValues);
  };

  const saveDataToJson = () => {
    // Create a JSON object with the saved values
    const jsonData = {
      nodeName,
      editorValues,
    };

    // Do something with the jsonData, such as sending it to a server or logging it
    console.log(jsonData);
  };

  const getNodeId = () => `randomnode_${Math.random()}`;

  // connaction delate edge

  const onEdgeUpdateStart = useCallback(() => {
    edgeUpdateSuccessful.current = false;
  }, []);

  const onEdgeUpdate = useCallback((oldEdge, newConnection) => {
    edgeUpdateSuccessful.current = true;
    setEdges((els) => updateEdge(oldEdge, newConnection, els));
  }, []);

  const onEdgeUpdateEnd = useCallback((_, edge) => {
    if (!edgeUpdateSuccessful.current) {
      setEdges((eds) => eds.filter((e) => e.id !== edge.id));
    }
    edgeUpdateSuccessful.current = true;
  }, []);

  function handleSendMessage(parentId) {
    const newNodeId = getNodeId();
    const newNode = {
      id: newNodeId,
      type: "custom1",
      data: {
        label: (
          <>
            <div
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <strong>Send message</strong>
            </div>
            <Handle
              type="target"
              position={Position.Top}
              className="!bg-gray-500 rounded-full w-5 h-5  flex   justify-center items-center bg-blend-color-dodge"
            />
            <div className="dropdown static">
              <span
                className="btn btn-secondary bg-primary item"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Handle
                  type="source"
                  position={Position.Bottom}
                  className="!bg-blue-500 rounded-full w-5 h-5  flex   justify-center items-center intro-1"
                >
                  <AddCircleOutlineOutlinedIcon color="white" />
                </Handle>
              </span>

              <div className="boxd  dropdown-menu">
                <div style={{ width: "320px" }}>
                  <div className="_3r_cjv5qLAZXJ0yxuenAFr">
                    <div className="serch">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1024 1024"
                        height="24"
                        width="40"
                        id="Search_Left_svg__Search_Left"
                        style={{ marginLeft: "2px" }}
                      >
                        <path
                          fill="currentColor"
                          d="M832 772.267 712.533 652.8l-4.267-4.267c38.4-51.2 59.733-110.933 59.733-179.2 0-166.4-132.267-298.667-298.667-298.667S170.665 302.933 170.665 469.333 302.932 768 469.332 768c68.267 0 128-21.333 179.2-59.733 0 0 0 4.267 4.267 4.267l119.467 119.467c8.533 8.533 21.333 12.8 29.867 12.8s21.333-4.267 29.867-12.8c17.067-17.067 17.067-42.667 0-59.733zm-362.667-89.6C349.866 682.667 256 588.8 256 469.334s93.867-213.333 213.333-213.333 213.333 93.867 213.333 213.333c0 119.467-93.867 213.333-213.333 213.333z"
                        ></path>
                      </svg>

                      <input
                        type="text"
                        id="kt_filter_search"
                        className="inpt"
                        value=""
                      />
                    </div>
                  </div>

                  <div className="dropdown-item">
                    {/* <div className="drope_scroll"> */}
                    <div
                      className="item_massage"
                      onClick={() => handleSendMessage(newNodeId)}
                    >
                      <span className="item_icon">
                        <svg
                          viewBox="0 0 1024 1024"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          style={{ marginBottom: "1px" }}
                        >
                          <path
                            fill="#e4fafb"
                            d="M213.333 85.333h597.333c46.933 0 85.333 38.4 85.333 85.333v426.667c0 46.933-38.4 85.333-85.333 85.333H345.599l-217.6 170.667V170.666c0-46.933 38.4-85.333 85.333-85.333zm298.667 768h341.333z"
                          ></path>
                          <path
                            fill="#34b8ca"
                            d="M128 896c-4.267 0-12.8 0-17.067-4.267-17.067-8.533-25.6-21.333-25.6-38.4V170.666c0-72.533 55.467-128 128-128h597.333c72.533 0 128 55.467 128 128v426.667c0 72.533-55.467 128-128 128h-448l-204.8 162.133c-12.8 4.267-21.333 8.533-29.867 8.533zm85.333-768c-25.6 0-42.667 17.067-42.667 42.667V768l149.333-115.2c8.533-8.533 17.067-12.8 25.6-12.8h465.067c25.6 0 42.667-17.067 42.667-42.667V170.666c0-25.6-17.067-42.667-42.667-42.667H213.333zm640 768H512c-25.6 0-42.667-17.067-42.667-42.667S486.4 810.666 512 810.666h341.333c25.6 0 42.667 17.067 42.667 42.667S878.933 896 853.333 896z"
                          ></path>
                        </svg>
                      </span>
                      <div className="massage_ineside">
                        <div> Send message</div>
                      </div>
                    </div>
                    <hr className="_1UHWnDVQz6IlE8BesuorIf" />
                    <div
                      className="item_massage"
                      onClick={() => handleSendOption(newNodeId)}
                    >
                      <span className="item_icon">
                        <svg
                          viewBox="0 0 1024 1024"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          style={{ marginb: "1px" }}
                        >
                          <path
                            fill="#fff6d9"
                            d="M98.133 209.067h853.333V422.4H98.133V209.067zM98.133 635.733h853.333v213.333H98.133V635.733z"
                          ></path>
                          <path
                            fill="#f5be4f"
                            d="M938.667 896H85.334c-25.6 0-42.667-17.067-42.667-42.667V640c0-25.6 17.067-42.667 42.667-42.667h853.333c25.6 0 42.667 17.067 42.667 42.667v213.333c0 25.6-17.067 42.667-42.667 42.667z"
                          ></path>
                          <path
                            fill="#fff6d9"
                            d="M128 682.667h768v128H128v-128z"
                          ></path>
                          <path
                            fill="#f5be4f"
                            d="M938.667 469.333H85.334c-25.6 0-42.667-17.067-42.667-42.667V213.333c0-25.6 17.067-42.667 42.667-42.667h853.333c25.6 0 42.667 17.067 42.667 42.667v213.333c0 25.6-17.067 42.667-42.667 42.667z"
                          ></path>
                          <path
                            fill="#fff6d9"
                            d="M128 256h768v128H128V256z"
                          ></path>
                        </svg>
                      </span>
                      <div className="massage_ineside">
                        <div>Buttons</div>
                      </div>
                    </div>
                    <hr className="_1UHWnDVQz6IlE8BesuorIf" />
                    <div
                      className="_2iAfv3Hqk3Qc1p1B7CMlj3"
                      // data-dropdown-dialog-type="input"
                      onClick={() => handlecollectInput(newNodeId)}
                    >
                      <span className="_373Z-i0F05J4tLu4remMBs undefined">
                        <svg
                          viewBox="0 0 1024 1024"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          style={{ marginBottom: "1px" }}
                        >
                          <path
                            fill="#e7f5fe"
                            d="M128 341.333h768v341.333H128V341.333z"
                          ></path>
                          <path
                            fill="rgba(20,150,215,1)"
                            d="M896 768H597.333c-25.6 0-42.667-17.067-42.667-42.667s17.067-42.667 42.667-42.667h256V341.333h-256c-25.6 0-42.667-17.067-42.667-42.667s17.067-42.667 42.667-42.667H896c25.6 0 42.667 17.067 42.667 42.667v426.667C938.667 750.933 921.6 768 896 768zm-640 0H128c-25.6 0-42.667-17.067-42.667-42.667V298.666c0-25.6 17.067-42.667 42.667-42.667h128c25.6 0 42.667 17.067 42.667 42.667S281.6 341.333 256 341.333h-85.333v341.333H256c25.6 0 42.667 17.067 42.667 42.667S281.6 768 256 768z"
                          ></path>
                          <path
                            fill="#ffffff"
                            d="M448 170.667v682.667zM341.333 853.333h213.333zm0-682.666h213.333z"
                          ></path>
                          <path
                            fill="rgba(20,150,215,1)"
                            d="M554.667 896H341.334c-25.6 0-42.667-17.067-42.667-42.667s17.067-42.667 42.667-42.667h64V213.333h-64c-25.6 0-42.667-17.067-42.667-42.667s17.067-42.667 42.667-42.667h213.333c25.6 0 42.667 17.067 42.667 42.667s-17.067 42.667-42.667 42.667h-64v597.333h64c25.6 0 42.667 17.067 42.667 42.667S580.267 896 554.667 896z"
                          ></path>
                        </svg>
                      </span>
                      <div className="_1xQdQFJcwMnQPogQf3-XYa">
                        <div>Collect Input</div>
                      </div>
                    </div>
                    <hr className="_1UHWnDVQz6IlE8BesuorIf" />
                    {/* </div> */}
                    {/* <div
                      className="_1-XwhNZYDKmRBA_lAaVJLX"
                      style={{
                        position: "absolute",
                        visibility: "visible",
                      }}
                    >
                      <div
                        className="_1ydVj8TM7vlS69V634PKCm"
                        style={{
                          position: "relative",
                          display: "block",
                          height: "43px",
                          transform: "translateY(0px)",
                        }}
                      ></div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </>
        ),
        Icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 40 40"
          >
            <g data-name="Group 4344">
              <circle
                data-name="Ellipse 709"
                cx="20"
                cy="20"
                r="20"
                style={{ fill: "rgb(228, 250, 251)" }}
              ></circle>
            </g>
            <g data-name="Group 4345">
              <path
                data-name="Path 1595"
                d="M13 10h14a2.006 2.006 0 0 1 2 2v10a2.006 2.006 0 0 1-2 2H16.1L11 28V12a2.006 2.006 0 0 1 2-2Zm7 18h8"
                style={{ fillRule: "evenodd", fill: "rgb(228, 250, 251)" }}
              ></path>
              <path
                data-name="Path 1596"
                d="M11 29a.6.6 0 0 1-.4-.1.961.961 0 0 1-.6-.9V12a2.946 2.946 0 0 1 3-3h14a2.946 2.946 0 0 1 3 3v10a2.946 2.946 0 0 1-3 3H16.5l-4.8 3.8a2.544 2.544 0 0 1-.7.2Zm2-18a.945.945 0 0 0-1 1v14l3.5-2.7a1.421 1.421 0 0 1 .6-.2H27a.945.945 0 0 0 1-1V12a.945.945 0 0 0-1-1Zm15 18h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Z"
                style={{ fill: "#2ab9cd" }}
              ></path>
            </g>
          </svg>
          // <ChatBubbleOutlineIcon color="info" />
        ),
        toolbarPosition: Position.Right,
      },
      position: { x: 645, y: nodes[nodes.length - 1].position.y + 150 },
    };

    setNodes((nodes) =>
      nodes.concat({
        ...newNode,
        position: { x: 640, y: nodes[nodes.length - 1].position.y + 150 },
      })
    );
    const newEdges = {
      id: `e${nodes[nodes.length - 1].id}-${newNode.id}`,
      // source: nodes[nodes.length - 1].id,
      source: parentId,
      target: newNodeId,
    };
    setEdges((edges) => edges.concat(newEdges));
    setReload(!reload);
  }

  function handlecollectInput(parentId) {
    const newNodeId_1 = getNodeId();
    const newNode = {
      id: newNodeId_1,
      type: "custom2",
      data: {
        label: (
          <>
            <div
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <strong>Collect Input</strong>
              {/* <button onClick={() => removeNode(newNode)}>Delete</button> */}
            </div>
            <Handle
              type="target"
              position={Position.Top}
              // className="w-16 !bg-teal-500 rounded-none"
              className="!bg-gray-500 rounded-full w-5 h-5  flex   justify-center items-center bg-blend-color-dodge"
            />
            <div className="dropdown static">
              <span
                className="btn btn-secondary bg-primary item"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Handle
                  type="source"
                  position={Position.Bottom}
                  className="!bg-blue-500 rounded-full w-5 h-5  flex   justify-center items-center intro-1"
                >
                  <AddCircleOutlineOutlinedIcon color="white" />
                </Handle>
              </span>

              <div className="boxd  dropdown-menu">
                <div style={{ width: "320px" }}>
                  <div className="_3r_cjv5qLAZXJ0yxuenAFr">
                    <div className="serch">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1024 1024"
                        height="24"
                        width="40"
                        id="Search_Left_svg__Search_Left"
                        style={{ marginLeft: "2px" }}
                      >
                        <path
                          fill="currentColor"
                          d="M832 772.267 712.533 652.8l-4.267-4.267c38.4-51.2 59.733-110.933 59.733-179.2 0-166.4-132.267-298.667-298.667-298.667S170.665 302.933 170.665 469.333 302.932 768 469.332 768c68.267 0 128-21.333 179.2-59.733 0 0 0 4.267 4.267 4.267l119.467 119.467c8.533 8.533 21.333 12.8 29.867 12.8s21.333-4.267 29.867-12.8c17.067-17.067 17.067-42.667 0-59.733zm-362.667-89.6C349.866 682.667 256 588.8 256 469.334s93.867-213.333 213.333-213.333 213.333 93.867 213.333 213.333c0 119.467-93.867 213.333-213.333 213.333z"
                        ></path>
                      </svg>
                      <input
                        type="text"
                        id="kt_filter_search"
                        className="inpt"
                        value=""
                      />
                    </div>
                  </div>

                  <div className="dropdown-item">
                    <div
                      className="item_massage"
                      onClick={() => handleSendMessage(newNodeId_1)}
                    >
                      <span className="item_icon">
                        <svg
                          viewBox="0 0 1024 1024"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          style={{ marginBottom: "1px" }}
                        >
                          <path
                            fill="#e4fafb"
                            d="M213.333 85.333h597.333c46.933 0 85.333 38.4 85.333 85.333v426.667c0 46.933-38.4 85.333-85.333 85.333H345.599l-217.6 170.667V170.666c0-46.933 38.4-85.333 85.333-85.333zm298.667 768h341.333z"
                          ></path>
                          <path
                            fill="#34b8ca"
                            d="M128 896c-4.267 0-12.8 0-17.067-4.267-17.067-8.533-25.6-21.333-25.6-38.4V170.666c0-72.533 55.467-128 128-128h597.333c72.533 0 128 55.467 128 128v426.667c0 72.533-55.467 128-128 128h-448l-204.8 162.133c-12.8 4.267-21.333 8.533-29.867 8.533zm85.333-768c-25.6 0-42.667 17.067-42.667 42.667V768l149.333-115.2c8.533-8.533 17.067-12.8 25.6-12.8h465.067c25.6 0 42.667-17.067 42.667-42.667V170.666c0-25.6-17.067-42.667-42.667-42.667H213.333zm640 768H512c-25.6 0-42.667-17.067-42.667-42.667S486.4 810.666 512 810.666h341.333c25.6 0 42.667 17.067 42.667 42.667S878.933 896 853.333 896z"
                          ></path>
                        </svg>
                      </span>
                      <div className="massage_ineside">
                        <div> Send message</div>
                      </div>
                    </div>
                    <hr className="_1UHWnDVQz6IlE8BesuorIf" />
                    <div
                      className="item_massage"
                      onClick={() => handleSendOption(newNodeId_1)}
                    >
                      <span className="item_icon">
                        <svg
                          viewBox="0 0 1024 1024"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          style={{ marginb: "1px" }}
                        >
                          <path
                            fill="#fff6d9"
                            d="M98.133 209.067h853.333V422.4H98.133V209.067zM98.133 635.733h853.333v213.333H98.133V635.733z"
                          ></path>
                          <path
                            fill="#f5be4f"
                            d="M938.667 896H85.334c-25.6 0-42.667-17.067-42.667-42.667V640c0-25.6 17.067-42.667 42.667-42.667h853.333c25.6 0 42.667 17.067 42.667 42.667v213.333c0 25.6-17.067 42.667-42.667 42.667z"
                          ></path>
                          <path
                            fill="#fff6d9"
                            d="M128 682.667h768v128H128v-128z"
                          ></path>
                          <path
                            fill="#f5be4f"
                            d="M938.667 469.333H85.334c-25.6 0-42.667-17.067-42.667-42.667V213.333c0-25.6 17.067-42.667 42.667-42.667h853.333c25.6 0 42.667 17.067 42.667 42.667v213.333c0 25.6-17.067 42.667-42.667 42.667z"
                          ></path>
                          <path
                            fill="#fff6d9"
                            d="M128 256h768v128H128V256z"
                          ></path>
                        </svg>
                      </span>
                      <div className="massage_ineside">
                        <div>Buttons</div>
                      </div>
                    </div>
                    <hr className="_1UHWnDVQz6IlE8BesuorIf" />
                    <div
                      className="_2iAfv3Hqk3Qc1p1B7CMlj3"
                      // data-dropdown-dialog-type="input"
                      onClick={() => handlecollectInput(newNodeId_1)}
                    >
                      <span className="_373Z-i0F05J4tLu4remMBs undefined">
                        <svg
                          viewBox="0 0 1024 1024"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          style={{ marginBottom: "1px" }}
                        >
                          <path
                            fill="#e7f5fe"
                            d="M128 341.333h768v341.333H128V341.333z"
                          ></path>
                          <path
                            fill="rgba(20,150,215,1)"
                            d="M896 768H597.333c-25.6 0-42.667-17.067-42.667-42.667s17.067-42.667 42.667-42.667h256V341.333h-256c-25.6 0-42.667-17.067-42.667-42.667s17.067-42.667 42.667-42.667H896c25.6 0 42.667 17.067 42.667 42.667v426.667C938.667 750.933 921.6 768 896 768zm-640 0H128c-25.6 0-42.667-17.067-42.667-42.667V298.666c0-25.6 17.067-42.667 42.667-42.667h128c25.6 0 42.667 17.067 42.667 42.667S281.6 341.333 256 341.333h-85.333v341.333H256c25.6 0 42.667 17.067 42.667 42.667S281.6 768 256 768z"
                          ></path>
                          <path
                            fill="#ffffff"
                            d="M448 170.667v682.667zM341.333 853.333h213.333zm0-682.666h213.333z"
                          ></path>
                          <path
                            fill="rgba(20,150,215,1)"
                            d="M554.667 896H341.334c-25.6 0-42.667-17.067-42.667-42.667s17.067-42.667 42.667-42.667h64V213.333h-64c-25.6 0-42.667-17.067-42.667-42.667s17.067-42.667 42.667-42.667h213.333c25.6 0 42.667 17.067 42.667 42.667s-17.067 42.667-42.667 42.667h-64v597.333h64c25.6 0 42.667 17.067 42.667 42.667S580.267 896 554.667 896z"
                          ></path>
                        </svg>
                      </span>
                      <div className="_1xQdQFJcwMnQPogQf3-XYa">
                        <div>Collect Input</div>
                      </div>
                    </div>
                    <hr className="_1UHWnDVQz6IlE8BesuorIf" />
                  </div>
                </div>
              </div>
            </div>
          </>
        ),
        Icon: (
          <svg
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
          >
            <circle
              id="Collect_Input_svg__Ellipse_699"
              data-name="Ellipse 699"
              cx="20"
              cy="20"
              r="20"
              style={{ fill: "rgb(231, 245, 254)" }}
            ></circle>
            <path
              id="Collect_Input_svg__Path_1565"
              fill="#359cec"
              data-name="Path 1565"
              d="M29 25h-7a1 1 0 0 1 0-2h6v-6h-6a1 1 0 0 1 0-2h7a.945.945 0 0 1 1 1v8a.945.945 0 0 1-1 1Zm-15 0h-3a.945.945 0 0 1-1-1v-8a.945.945 0 0 1 1-1h3a1 1 0 0 1 0 2h-2v6h2a1 1 0 0 1 0 2Z"
            ></path>
            <path
              id="Collect_Input_svg__Path_1566"
              data-name="Path 1566"
              d="M18.5 13v14M16 13h5m-5 14h5"
              style={{ fill: "rgb(255, 255, 255)", fillRule: "evenodd" }}
            ></path>
            <path
              id="Collect_Input_svg__Path_1567"
              data-name="Path 1567"
              fill="#359cec"
              d="M21 28h-5a1 1 0 0 1 0-2h1.5V14H16a1 1 0 0 1 0-2h5a1 1 0 0 1 0 2h-1.5v12H21a1 1 0 0 1 0 2Z"
            ></path>
          </svg>
        ),
        toolbarPosition: Position.Right,
      },
      position: { x: 645, y: nodes[nodes.length - 1].position.y + 150 },
    };

    setNodes((nodes) =>
      nodes.concat({
        ...newNode,
        position: { x: 640, y: nodes[nodes.length - 1].position.y + 150 },
      })
    );

    const newEdges = {
      id: `e${nodes[nodes.length - 1].id}-${newNode.id}`,
      source: parentId,
      target: newNodeId_1,
    };
    setEdges((edges) => edges.concat(newEdges));
    setReload(!reload);
  }

  function handleSendOption(parentId) {
    const newNodeId1 = getNodeId();
    const newNodeId2 = getNodeId();

    const newNode = [
      {
        id: newNodeId1,
        type: "custom3",
        data: {
          label: (
            <>
              <div
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                <strong>Buttons</strong>
              </div>
              <Handle
                type="target"
                position={Position.Top}
                // className="!bg-gray-500 rounded-full w-3 h-3  flex   justify-center items-center bg-blend-color-dodge"
              />
              <Handle
                type="source"
                position={Position.Bottom}
                className="!bg-gray-500 rounded-full w-3 h-3  flex   justify-center items-center bg-blend-color-dodge"
              />
            </>
          ),
          Icon: (
            <svg
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
              height="45"
              width="45"
            >
              <g data-name="Group 4259" transform="translate(0 1)">
                <circle
                  data-name="Ellipse 688"
                  cx="20"
                  cy="20"
                  r="20"
                  transform="translate(0 -1)"
                  style={{ fill: "rgb(255, 246, 217)" }}
                ></circle>
              </g>
              <g data-name="Group 4260">
                <path
                  data-name="Path 1515"
                  d="M30 29H10a.945.945 0 0 1-1-1v-5a.945.945 0 0 1 1-1h20a.945.945 0 0 1 1 1v5a.945.945 0 0 1-1 1Zm-19-2h18v-3H11Zm19-8H10a.945.945 0 0 1-1-1v-5a.945.945 0 0 1 1-1h20a.945.945 0 0 1 1 1v5a.945.945 0 0 1-1 1Zm-19-2h18v-3H11Z"
                  transform="translate(0 1)"
                  style={{ fill: "#f5be4f" }}
                ></path>
              </g>
            </svg>
          ),
          toolbarPosition: Position.Right,
        },
        position: { x: 645, y: nodes[nodes.length - 1].position.y + 150 },
      },
      {
        id: newNodeId2,
        type: "output",
        data: {
          label: (
            <>
              <div>
                <strong>Button</strong>
              </div>
              <Handle
                type="target"
                position={Position.Top}
                // className="b-handle"
              />

              <div className="dropdown static">
                <span
                  className="btn btn-secondary bg-primary item"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <Handle
                    type="source"
                    position={Position.Bottom}
                    className="!bg-blue-500 rounded-full w-5 h-5  flex   justify-center items-center intro-1"
                  >
                    <AddCircleOutlineOutlinedIcon color="white" />
                  </Handle>
                </span>

                <div className="boxd  dropdown-menu">
                  <div style={{ width: "320px" }}>
                    <div className="_3r_cjv5qLAZXJ0yxuenAFr">
                      <div className="serch">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 1024 1024"
                          height="24"
                          width="40"
                          id="Search_Left_svg__Search_Left"
                          style={{ marginLeft: "2px" }}
                        >
                          <path
                            fill="currentColor"
                            d="M832 772.267 712.533 652.8l-4.267-4.267c38.4-51.2 59.733-110.933 59.733-179.2 0-166.4-132.267-298.667-298.667-298.667S170.665 302.933 170.665 469.333 302.932 768 469.332 768c68.267 0 128-21.333 179.2-59.733 0 0 0 4.267 4.267 4.267l119.467 119.467c8.533 8.533 21.333 12.8 29.867 12.8s21.333-4.267 29.867-12.8c17.067-17.067 17.067-42.667 0-59.733zm-362.667-89.6C349.866 682.667 256 588.8 256 469.334s93.867-213.333 213.333-213.333 213.333 93.867 213.333 213.333c0 119.467-93.867 213.333-213.333 213.333z"
                          ></path>
                        </svg>

                        <input
                          type="text"
                          id="kt_filter_search"
                          className="inpt"
                          value=""
                        />
                      </div>
                    </div>

                    <div className="dropdown-item">
                      {/* <div className="drope_scroll"> */}
                      <div
                        className="item_massage"
                        onClick={() => handleSendMessage(newNodeId2)}
                      >
                        <span className="item_icon">
                          <svg
                            viewBox="0 0 1024 1024"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="25"
                            style={{ marginBottom: "1px" }}
                          >
                            <path
                              fill="#e4fafb"
                              d="M213.333 85.333h597.333c46.933 0 85.333 38.4 85.333 85.333v426.667c0 46.933-38.4 85.333-85.333 85.333H345.599l-217.6 170.667V170.666c0-46.933 38.4-85.333 85.333-85.333zm298.667 768h341.333z"
                            ></path>
                            <path
                              fill="#34b8ca"
                              d="M128 896c-4.267 0-12.8 0-17.067-4.267-17.067-8.533-25.6-21.333-25.6-38.4V170.666c0-72.533 55.467-128 128-128h597.333c72.533 0 128 55.467 128 128v426.667c0 72.533-55.467 128-128 128h-448l-204.8 162.133c-12.8 4.267-21.333 8.533-29.867 8.533zm85.333-768c-25.6 0-42.667 17.067-42.667 42.667V768l149.333-115.2c8.533-8.533 17.067-12.8 25.6-12.8h465.067c25.6 0 42.667-17.067 42.667-42.667V170.666c0-25.6-17.067-42.667-42.667-42.667H213.333zm640 768H512c-25.6 0-42.667-17.067-42.667-42.667S486.4 810.666 512 810.666h341.333c25.6 0 42.667 17.067 42.667 42.667S878.933 896 853.333 896z"
                            ></path>
                          </svg>
                        </span>
                        <div className="massage_ineside">
                          <div> Send message</div>
                        </div>
                      </div>
                      <hr className="_1UHWnDVQz6IlE8BesuorIf" />
                      <div
                        className="item_massage"
                        onClick={() => handleSendOption(newNodeId2)}
                      >
                        <span className="item_icon">
                          <svg
                            viewBox="0 0 1024 1024"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="25"
                            style={{ marginb: "1px" }}
                          >
                            <path
                              fill="#fff6d9"
                              d="M98.133 209.067h853.333V422.4H98.133V209.067zM98.133 635.733h853.333v213.333H98.133V635.733z"
                            ></path>
                            <path
                              fill="#f5be4f"
                              d="M938.667 896H85.334c-25.6 0-42.667-17.067-42.667-42.667V640c0-25.6 17.067-42.667 42.667-42.667h853.333c25.6 0 42.667 17.067 42.667 42.667v213.333c0 25.6-17.067 42.667-42.667 42.667z"
                            ></path>
                            <path
                              fill="#fff6d9"
                              d="M128 682.667h768v128H128v-128z"
                            ></path>
                            <path
                              fill="#f5be4f"
                              d="M938.667 469.333H85.334c-25.6 0-42.667-17.067-42.667-42.667V213.333c0-25.6 17.067-42.667 42.667-42.667h853.333c25.6 0 42.667 17.067 42.667 42.667v213.333c0 25.6-17.067 42.667-42.667 42.667z"
                            ></path>
                            <path
                              fill="#fff6d9"
                              d="M128 256h768v128H128V256z"
                            ></path>
                          </svg>
                        </span>
                        <div className="massage_ineside">
                          <div>Buttons</div>
                        </div>
                      </div>
                      <hr className="_1UHWnDVQz6IlE8BesuorIf" />
                      <div
                        className="_2iAfv3Hqk3Qc1p1B7CMlj3"
                        // data-dropdown-dialog-type="input"
                        onClick={() => handlecollectInput(newNodeId2)}
                      >
                        <span className="_373Z-i0F05J4tLu4remMBs undefined">
                          <svg
                            viewBox="0 0 1024 1024"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="25"
                            style={{ marginBottom: "1px" }}
                          >
                            <path
                              fill="#e7f5fe"
                              d="M128 341.333h768v341.333H128V341.333z"
                            ></path>
                            <path
                              fill="rgba(20,150,215,1)"
                              d="M896 768H597.333c-25.6 0-42.667-17.067-42.667-42.667s17.067-42.667 42.667-42.667h256V341.333h-256c-25.6 0-42.667-17.067-42.667-42.667s17.067-42.667 42.667-42.667H896c25.6 0 42.667 17.067 42.667 42.667v426.667C938.667 750.933 921.6 768 896 768zm-640 0H128c-25.6 0-42.667-17.067-42.667-42.667V298.666c0-25.6 17.067-42.667 42.667-42.667h128c25.6 0 42.667 17.067 42.667 42.667S281.6 341.333 256 341.333h-85.333v341.333H256c25.6 0 42.667 17.067 42.667 42.667S281.6 768 256 768z"
                            ></path>
                            <path
                              fill="#ffffff"
                              d="M448 170.667v682.667zM341.333 853.333h213.333zm0-682.666h213.333z"
                            ></path>
                            <path
                              fill="rgba(20,150,215,1)"
                              d="M554.667 896H341.334c-25.6 0-42.667-17.067-42.667-42.667s17.067-42.667 42.667-42.667h64V213.333h-64c-25.6 0-42.667-17.067-42.667-42.667s17.067-42.667 42.667-42.667h213.333c25.6 0 42.667 17.067 42.667 42.667s-17.067 42.667-42.667 42.667h-64v597.333h64c25.6 0 42.667 17.067 42.667 42.667S580.267 896 554.667 896z"
                            ></path>
                          </svg>
                        </span>
                        <div className="_1xQdQFJcwMnQPogQf3-XYa">
                          <div>Collect Input</div>
                        </div>
                      </div>
                      <hr className="_1UHWnDVQz6IlE8BesuorIf" />
                      {/* </div> */}
                      {/* <div
                      className="_1-XwhNZYDKmRBA_lAaVJLX"
                      style={{
                        position: "absolute",
                        visibility: "visible",
                      }}
                    >
                      <div
                        className="_1ydVj8TM7vlS69V634PKCm"
                        style={{
                          position: "relative",
                          display: "block",
                          height: "43px",
                          transform: "translateY(0px)",
                        }}
                      ></div>
                    </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ),
        },

        position: { x: 730, y: nodes[nodes.length - 1].position.y + 300 },
        style: {
          background: "#D6D5E6",
          color: "#333",
          border: "0px solid #222138",
          // width: 80,
        },
      },
    ];
    const updatedNewNode = [...newNode]; // Create a copy of newNode array
    updatedNewNode[0].position = {
      x: 650, // New x coordinate
      y: 300, // New y coordinate
    };

    // setNodes((nds) => nds.concat(newNode));
    setNodes((nds) => nds.concat(updatedNewNode));

    console.log(updatedNewNode);

    const joinBranchWithOption = {
      id: `e${newNodeId1}-${newNodeId2}`,
      source: newNodeId1,
      target: newNodeId2,
    };
    const connectWithBot = {
      id: `e${newNodeId1}-${newNodeId2}`,
      source: parentId,
      target: newNodeId1,
    };
    setEdges((edges) => edges.concat(joinBranchWithOption, connectWithBot));
    setReload(!reload);
  }

  // useEffect(() => {}, [singleNode, reload]);

  // by defult input text
  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === "1") {
          node.data = {
            ...node.data,
            children: nodeName,
          };
          // console.log(node.data);
        }

        return node;
      })
    );
  }, [nodeName, setNodes]);

  return (
    <>
      <div style={{ height: "739px" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onEdgeUpdate={onEdgeUpdate}
          onEdgeUpdateStart={onEdgeUpdateStart}
          onEdgeUpdateEnd={onEdgeUpdateEnd}
          // connectionLineComponent={ConnectionLine}
          nodeTypes={nodeTypes}
          className="!bg-teal-50"
          onNodeClick={(e, node) => setSingleNode(node)}
        >
          <Controls />
          <Background gap={16} />
        </ReactFlow>
        <div>
          <div
            className="offcanvas offcanvas-end"
            data-bs-scroll="true"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header">
              <div
                className="offcanvas-title rounded-full w-12 h-12  flex justify-center items-center"
                id="offcanvasRightLabel "
              >
                {singleNode?.data?.Icon}
              </div>
              <button
                className="btn btn-outline-info"
                style={{ width: "100px", marginLeft: "20px" }}
                onClick={saveDataToJson}
              >
                Save
              </button>
              {/* <button type="button" tabIndex={0} id="triger-HTU">
                <span className="text-indigo-600 hover:underline">
                  Haw to use
                </span>
              </button> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16 "
                // className="bi bi-trash3 bnt"
              >
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
              </svg>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <br />
            <div className="offcanvas-body">
              <TextField
                type="text"
                id="standard-basics"
                variant="standard"
                style={{ width: "80%", marginLeft: "30px" }}
                // value={
                //   singleNode?.data?.label?.props?.children[0]?.props?.children
                //     ?.props?.children
                // }
                value={nodeName}
                // onChange={(evt) => setNodeName(evt.target.value)}
                // value={nodeName}
                onChange={handleTextFieldChange}
              ></TextField>
              <div className="text-slate-700 dark:text-slate-500">
                <label className="text-center">
                  Trigger block is the prerequisite with which its underlying
                  conversation flow is executed
                </label>
              </div>
              <br />
              &nbsp;
              <br />
              &nbsp;
              {editors.map((editor, index) => (
                <div
                  key={editor.id}
                  className="d-flex flex-column scroll_statement_div statementComponent__div fv-row mb-7"
                  // id={`statementComponent__div_id_${editor.id}`}
                  style={{
                    maxHeight: "100px",
                    scrollPaddingTop: "50px",
                    width: "90%",
                    marginLeft: "20px",
                  }}
                >
                  <h5>Sends this message</h5>
                  <CKEditor
                    editor={ClassicEditor}
                    className="ckediter"
                    name={`test_${editor.id}`}
                    config={{
                      toolbar: [
                        "bold",
                        "italic",
                        "underline",
                        "underline",
                        "bulletedList",
                        "numberedList",
                        "link",
                      ],
                    }}
                    onChange={(event, editor) => {
                      const content = editor.getData();
                      handleEditorChange(index, content);
                    }}
                  />
                  <label className="text-slate-700 dark:text-slate-500">
                    You can reference a variable by typing #
                  </label>

                  <button
                    onClick={() => removeEditor(editor.id)}
                    className="bnt_1 btn-close"
                    type="button"
                    // style={{ visibility: "visible" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16 "
                    >
                      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                    </svg>
                  </button>
                </div>
              ))}
              <br />
              <hr className="under_line" />
              <button
                className="btn btn-outline-info"
                style={{ width: "100px", marginLeft: "20px" }}
                onClick={addEditor}
              >
                + Text
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default () => (
  <ReactFlowProvider>
    <SaveRestore />
  </ReactFlowProvider>
);
