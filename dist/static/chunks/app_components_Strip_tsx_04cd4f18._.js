(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/components/Strip.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Strip
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const ImageData = [
    {
        id: 1,
        name: 'AVIS',
        imgSrc: './SVG/AVIS.svg'
    },
    {
        id: 2,
        name: 'Baron',
        imgSrc: './SVG/Baron.svg'
    },
    {
        id: 3,
        name: 'Clover',
        imgSrc: './SVG/Clover.svg'
    },
    {
        id: 4,
        name: 'Comcast',
        imgSrc: './SVG/Comcast.svg'
    },
    {
        id: 5,
        name: 'ETS',
        imgSrc: './SVG/ETS.svg'
    },
    {
        id: 6,
        name: 'Expedia',
        imgSrc: './SVG/Expedia.svg'
    },
    {
        id: 7,
        name: 'Identity',
        imgSrc: './SVG/Identity.svg'
    },
    {
        id: 8,
        name: 'Lucid',
        imgSrc: './SVG/Lucid.svg'
    },
    {
        id: 9,
        name: 'Microsoft',
        imgSrc: './SVG/Microsoft.svg'
    },
    {
        id: 10,
        name: 'NEOM',
        imgSrc: './SVG/NEOM.svg'
    },
    {
        id: 11,
        name: 'NFL',
        imgSrc: './SVG/NFL.svg'
    },
    {
        id: 12,
        name: 'Toefl',
        imgSrc: './SVG/Toefl.svg'
    },
    {
        id: 13,
        name: 'Under_armour',
        imgSrc: './SVG/Under_armour.svg'
    },
    {
        id: 14,
        name: 'Zappos',
        imgSrc: './SVG/Zappos.svg'
    }
];
function Strip() {
    _s();
    const stripe1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stripe2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Strip.useEffect": ()=>{
            animation();
        }
    }["Strip.useEffect"], []);
    const animation = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(stripe1.current, {
            x: '-100%',
            duration: 27,
            repeat: -1,
            ease: 'linear'
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(stripe2.current, {
            x: '-100%',
            duration: 27,
            repeat: -1,
            ease: 'linear'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative pb-30 md:pb-65 lg:pb-85 xl:pb-100 2xl:pb-120",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "stripe_container absolute top-0 left-0 border-[#9c9c9c] border-y-1 ",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stripe_slider relative flex whitespace-nowrap py-8 md:py-4 lg:py-2 ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: stripe1,
                        className: "flex gap-28 md:gap-54 ",
                        children: ImageData.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center w-[10vw] h-[10vw]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: item.imgSrc,
                                    alt: item.name,
                                    className: "scale-200 md:scale-100"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Strip.tsx",
                                    lineNumber: 56,
                                    columnNumber: 29
                                }, this)
                            }, item.id, false, {
                                fileName: "[project]/app/components/Strip.tsx",
                                lineNumber: 55,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Strip.tsx",
                        lineNumber: 53,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: stripe2,
                        className: "absolute left-[100%] flex gap-28 md:gap-54 ",
                        children: ImageData.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center w-[10vw] h-[10vw]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: item.imgSrc,
                                    alt: item.name,
                                    className: "scale-200 md:scale-100"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Strip.tsx",
                                    lineNumber: 65,
                                    columnNumber: 29
                                }, this)
                            }, 100 + item.id, false, {
                                fileName: "[project]/app/components/Strip.tsx",
                                lineNumber: 64,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Strip.tsx",
                        lineNumber: 62,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Strip.tsx",
                lineNumber: 52,
                columnNumber: 13
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/Strip.tsx",
            lineNumber: 51,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/Strip.tsx",
        lineNumber: 50,
        columnNumber: 9
    }, this);
}
_s(Strip, "dnOxR1LeNFBkvnCnMzqAux7yGh0=");
_c = Strip;
var _c;
__turbopack_context__.k.register(_c, "Strip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_components_Strip_tsx_04cd4f18._.js.map