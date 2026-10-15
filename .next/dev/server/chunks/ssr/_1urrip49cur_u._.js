(()=>{"use strict";module.exports = [
"[project]/my-app/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/my-app/src/app/actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "0013e4731b4ae6a59471b7db560922030012e5581c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$src$2f$app$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["obtenerCartasRickAndMorty"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$my$2d$app$2f$src$2f$app$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/my-app/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/my-app/src/app/actions.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$src$2f$app$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/src/app/actions.js [app-rsc] (ecmascript)");
}),
"[project]/my-app/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/my-app/src/app/actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$src$2f$app$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/src/app/actions.js [app-rsc] (ecmascript)");
;
}),
"[project]/my-app/src/app/actions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0013e4731b4ae6a59471b7db560922030012e5581c":{"name":"obtenerCartasRickAndMorty"}},"my-app/src/app/actions.js",""] */ __turbopack_context__.s([
    "obtenerCartasRickAndMorty",
    ()=>obtenerCartasRickAndMorty
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
async function obtenerCartasRickAndMorty() {
    try {
        // 1. Consultamos la API externa
        const res = await fetch('https://rickandmortyapi.com/api/character');
        // 2. Manejo de error si la red responde pero con un fallo HTTP
        if (!res.ok) {
            return {
                ok: false,
                error: 'No se pudieron obtener los personajes.'
            };
        }
        const data = await res.json();
        // 3. Tomamos 8 personajes y extraemos id, nombre e imagen
        const personajes = data.results.slice(0, 8).map((char)=>({
                id: char.id,
                nombre: char.name,
                imagen: char.image
            }));
        return {
            ok: true,
            cartas: personajes
        };
    } catch (error) {
        // 4. Captura de errores de red o servidor con try/catch
        return {
            ok: false,
            error: 'Error de conexión con la API externa.'
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    obtenerCartasRickAndMorty
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(obtenerCartasRickAndMorty, "0013e4731b4ae6a59471b7db560922030012e5581c", null);
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureServerEntryExports", {
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
});
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== 'function') {
            throw new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`);
        }
    }
}
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable import/no-extraneous-dependencies */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "registerServerReference", {
    enumerable: true,
    get: function() {
        return _server.registerServerReference;
    }
});
const _server = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
}),
];})()

//# sourceMappingURL=_1urrip49cur_u._.js.map