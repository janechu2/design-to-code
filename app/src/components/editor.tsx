import React, { useCallback, useState } from "react";
import {
    DataDictionary,
    DataType,
    MessageSystem,
    SchemaDictionary,
} from "design-to-code";
import { ModularForm, ModularNavigation, ModularViewer } from "design-to-code-react";
import { schemaDictionary as nativeElementSchemaDictionary } from "../configs/native.schema-dictionary";
import "./editor.css";
import MessageSystemWorker from "design-to-code/dist/message-system.min.js";
import { MonacoEditor } from "./monaco-editor";
import { mapDataDictionaryToMonacoEditorHTML } from "design-to-code/dist/esm/data-utilities/monaco";

const initialDataDictionary: DataDictionary<unknown> = [
    {
        root: {
            schemaId: "div",
            data: {},
        },
    },
    "root",
];

const initialSchemaDictionary: SchemaDictionary = nativeElementSchemaDictionary;

const messageSystem = new MessageSystem({
    webWorker: new MessageSystemWorker(),
    dataDictionary: initialDataDictionary,
    schemaDictionary: initialSchemaDictionary,
});

export function Editor() {
    const [viewWidth, setViewWidth] = useState(0);
    const [viewHeight, setViewHeight] = useState(0);

    const onViewRefChange = useCallback(node => {
        if (node !== null) {
            const { height, width } = getComputedStyle(node);

            setViewWidth(parseInt(width.slice(0, -2), 10));
            setViewHeight(parseInt(height.slice(0, -2), 10));
        }
    }, []);

    return (
        <main className="editor">
            <nav className="editor-toolbar">header</nav>
            <div className="editor-container">
                <div className="editor-left-rail">
                    <ModularNavigation
                        messageSystem={messageSystem}
                        types={[DataType.object]}
                    />
                </div>
                <div className="editor-view">
                    <div className="editor-view-viewer" ref={onViewRefChange}>
                        <ModularViewer
                            height={viewHeight}
                            width={viewWidth}
                            onUpdateHeight={setViewHeight}
                            onUpdateWidth={setViewWidth}
                            iframeSrc={"/preview"}
                            messageSystem={messageSystem}
                            responsive={true}
                        />
                    </div>
                    <div className="editor-view-monaco">
                        <MonacoEditor
                            messageSystem={messageSystem}
                            initialValue={mapDataDictionaryToMonacoEditorHTML(
                                initialDataDictionary,
                                initialSchemaDictionary
                            )}
                        />
                    </div>
                </div>
                <div className="editor-right-rail">
                    <ModularForm messageSystem={messageSystem} />
                </div>
            </div>
        </main>
    );
}
