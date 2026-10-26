/**
 * Generates a modern theme.json (Schema v3) compatible with WordPress 6.0+
 */

export function generateThemeJson(t) {
  return JSON.stringify(
    {
      "$schema": "https://schemas.wp.org/trunk/theme.json",
      "version": 3,
      "title": t.themeName,
      "settings": {
        "appearanceTools": true,
        "useRootPaddingAwareAlignments": true,
        "layout": {
          "contentSize": "840px",
          "wideSize": "1200px"
        },
        "color": {
          "custom": true,
          "customDuotone": false,
          "customGradient": true,
          "defaultPalette": false,
          "palette": [
            {
              "slug": "base",
              "color": "#ffffff",
              "name": "Base / White"
            },
            {
              "slug": "contrast",
              "color": "#0f172a",
              "name": "Contrast / Dark"
            },
            {
              "slug": "primary",
              "color": "#0284c7",
              "name": "Primary Blue"
            },
            {
              "slug": "secondary",
              "color": "#4f46e5",
              "name": "Secondary Indigo"
            },
            {
              "slug": "muted",
              "color": "#64748b",
              "name": "Muted Slate"
            },
            {
              "slug": "surface",
              "color": "#f8fafc",
              "name": "Surface Light"
            }
          ]
        },
        "typography": {
          "fontSizes": [
            {
              "slug": "small",
              "size": "0.875rem",
              "name": "Small"
            },
            {
              "slug": "medium",
              "size": "1rem",
              "name": "Medium (Body)"
            },
            {
              "slug": "large",
              "size": "1.35rem",
              "name": "Large"
            },
            {
              "slug": "x-large",
              "size": "1.85rem",
              "name": "Extra Large"
            },
            {
              "slug": "xx-large",
              "size": "2.5rem",
              "name": "2X Large"
            }
          ]
        },
        "spacing": {
          "units": ["px", "em", "rem", "vh", "vw", "%"],
          "spacingScale": {
            "operator": "*",
            "increment": 1.5,
            "steps": 7,
            "mediumStep": 1.5,
            "unit": "rem"
          }
        }
      },
      "styles": {
        "color": {
          "background": "var(--wp--preset--color--base)",
          "text": "var(--wp--preset--color--contrast)"
        },
        "elements": {
          "link": {
            "color": {
              "text": "var(--wp--preset--color--primary)"
            },
            ":hover": {
              "color": {
                "text": "var(--wp--preset--color--secondary)"
              }
            }
          },
          "heading": {
            "color": {
              "text": "var(--wp--preset--color--contrast)"
            },
            "typography": {
              "fontWeight": "700"
            }
          }
        }
      }
    },
    null,
    2
  );
}
