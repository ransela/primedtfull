export default {
  panel: {
    class: "mb-1"
  },
  header: {
    class: ["rounded-md", "outline-none", "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50"]
  },
  headercontent: ({ context, instance }) => {
      var _a, _b;
      return {
        class: [
          // Shape
          "rounded-t-md",
          { "rounded-br-md rounded-bl-md": !context.active || ((_a = instance.activeItem) == null ? void 0 : _a.items) === void 0, "rounded-br-0 rounded-bl-0": context.active && ((_b = instance.activeItem) == null ? void 0 : _b.items) !== void 0 },
          // Color
          "border border-surface-200 dark:border-surface-700",
          "bg-surface-0 dark:bg-surface-800",
          "text-surface-600 dark:text-surface-0/80",
          { "text-surface-900 ark:text-surface-0": context.active },
          // Transition
          "transition duration-200 ease-in-out",
          "transition-shadow duration-200"
        ]
      };
    },
  headeraction: {
    class: ["relative", "font-semibold", "text-sm", "leading-none", "flex items-center", "px-3 py-2", "select-none cursor-pointer no-underline"]
  },
  headerlabel: {
    class: "leading-none"
  },
  headerIcon: {
    class: "mr-2 text-sm"
  },
  submenuicon: {
    class: "ml-auto order-last text-sm"
  },
  menucontent: {
    class: ["py-1", "border border-t-0", "rounded-t-none rounded-br-md rounded-bl-md", "text-surface-700 dark:text-white/80", "bg-surface-0 dark:bg-surface-800", "border-surface-200 dark:border-surface-700"]
  },
  menu: {
    class: ["outline-none", "m-0 p-0 list-none"]
  },
  content: {
    class: ["border-none rounded-none", "text-surface-700 dark:text-white/80", "transition-shadow duration-200"]
  },
  action: ({ context }) => ({
      class: [
        "relative",
        // Font
        "text-sm leading-none",
        // Flex & Alignments
        "flex items-center",
        // Spacing
        "py-2 px-3",
        // Color
        "text-surface-700 dark:text-white/80",
        // States
        "hover:bg-surface-100 dark:hover:bg-surface-700/80 hover:text-surface-700 dark:hover:text-white/80",
        {
          "bg-surface-200 text-surface-700 dark:text-white/80 dark:bg-surface-600/90": context.focused
        },
        // Misc
        "cursor-pointer no-underline",
        "select-none overflow-hidden"
      ]
    }),
  icon: {
    class: "mr-2"
  },
  submenu: {
    class: "p-0 pl-4 m-0 list-none"
  },
  transition: {
    enterFromClass: "max-h-0",
    enterActiveClass: "overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]",
    enterToClass: "max-h-[1000px]",
    leaveFromClass: "max-h-[1000px]",
    leaveActiveClass: "overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]",
    leaveToClass: "max-h-0"
  }
}