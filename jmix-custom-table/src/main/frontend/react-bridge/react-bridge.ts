declare global {
    interface Window {
        ReactBridge?: { notify: (msg: any) => void };
    }
}

function getBridgeEl(): any | null {
    // react-bridge là tag của component Java @Tag("react-bridge")
    return document.querySelector("react-bridge");
}

window.ReactBridge = {
    notify: (msg: any) => {
        const el = getBridgeEl();

        // Khi Vaadin chưa attach component, $server có thể chưa sẵn sàng
        if (!el?.$server?.onReactEvent) {
            console.warn("[ReactBridge] element not ready or missing $server");
            return;
        }

        // Gọi thẳng @ClientCallable onReactEvent(String json)
        el.$server.onReactEvent(JSON.stringify(msg));
    },
};

export {};
