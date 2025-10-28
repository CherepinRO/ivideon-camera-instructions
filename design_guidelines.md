# Design Guidelines: Ivideon Camera Connection Tutorial Landing Page

## Design Approach

**Reference-Based Approach:** Tutorial/documentation-style design inspired by Ivideon's existing interface aesthetics. This is a utility-focused, instructional page where clarity and step-by-step guidance are paramount.

**Key Design Principles:**
- Clean, professional documentation style
- Clear visual hierarchy for step-by-step instructions
- Screenshot-driven learning with supporting text
- Optimized for Russian language typography

## Core Design Elements

### A. Typography

**Font Family:** 
- Primary: 'Inter' or 'Open Sans' via Google Fonts (excellent Cyrillic support)
- Fallback: system-ui, -apple-system, sans-serif

**Type Scale:**
- Page heading (H1): text-4xl md:text-5xl, font-bold, tracking-tight
- Section headings (H2): text-2xl md:text-3xl, font-semibold
- Step numbers: text-lg md:text-xl, font-medium
- Body text: text-base md:text-lg, leading-relaxed
- Captions: text-sm, text-gray-600

### B. Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16 (p-4, mb-8, mt-12, etc.)

**Container Structure:**
- Max width: max-w-4xl (optimal for instructional content)
- Horizontal padding: px-4 md:px-8
- Vertical sections: py-12 md:py-16
- Content-to-image gap: mb-6 md:mb-8

**Grid System:**
- Single column layout for clarity
- Full-width screenshot containers with subtle borders/shadows

### C. Component Library

**Navigation Header:**
- Fixed top bar with Ivideon branding
- Height: h-16 md:h-20
- Simple, unobtrusive design

**Instructional Step Block:**
- Step number badge (rounded, colored background)
- Heading with instruction text
- Body text for additional details
- Screenshot container with border and shadow
- Vertical spacing between steps: space-y-12 md:space-y-16

**Screenshot Container:**
- Border: border border-gray-200
- Shadow: shadow-lg
- Rounded corners: rounded-lg
- Responsive sizing: w-full with appropriate constraints

**Step Number Badge:**
- Size: w-10 h-10 md:w-12 h-12
- Rounded: rounded-full
- Centered text with number
- Positioned inline with heading or as standalone element

### D. Visual Treatment

**Color Palette (Ivideon-inspired):**
- Primary blue accent (for badges, highlights)
- White/off-white backgrounds
- Gray for supporting text (gray-600, gray-700)
- Border colors: gray-200, gray-300
- NO specific color codes - keep neutral grays and single primary blue

**Shadows & Borders:**
- Screenshot shadows: shadow-md to shadow-lg
- Subtle borders for definition: border-gray-200
- Card-like treatment for step containers if needed

## Images

**Hero Section:** NO traditional hero image. This is a tutorial page.

**Screenshot Images:**
- **Placement:** Below each instruction text block
- **Image 1:** Ivideon personal cabinet interface showing "Добавить устройство" button
- **Description:** Clean screenshot of Ivideon dashboard with the blue interface header, white content area, and highlighted "Add Device" button
- **Styling:** Full-width within container, bordered, shadowed for depth
- **Responsive:** Scale appropriately on mobile devices
- **Format:** High-quality screenshots with clear interface elements visible

**Additional Images (as steps are added):**
- Each step should have its corresponding interface screenshot
- Maintain consistent screenshot styling throughout
- Ensure Russian text in screenshots is legible

## Page Structure

**Layout Flow:**
1. Simple header with Ivideon branding
2. Main title: "Подключение камер через личный кабинет"
3. Step 1 section:
   - Step number badge + heading
   - Instruction text
   - Screenshot image below
4. (Future steps follow same pattern)
5. Minimal footer with copyright/links

**Responsive Behavior:**
- Mobile: Single column, smaller type scale, reduced spacing
- Desktop: Optimized reading width (max-w-4xl), larger screenshots, generous spacing
- Screenshots scale proportionally, maintain aspect ratio

## Accessibility

- High contrast for Russian text readability
- Semantic heading hierarchy (H1 → H2 → H3)
- Alt text for all screenshots describing the interface shown
- Focus states for any interactive elements
- Proper lang="ru" attribute

## Animation

**Minimal to None:** This is an instructional page.
- Optional: Subtle fade-in on scroll for step containers
- NO distracting animations that interfere with learning

## Special Considerations

**Russian Language:**
- Ensure adequate line-height for Cyrillic characters (leading-relaxed)
- Test with actual Russian text for proper rendering
- Choose fonts explicitly supporting Cyrillic well

**Tutorial-Specific:**
- Clear visual separation between steps
- Screenshot borders to distinguish from background
- Step numbers prominently displayed
- Progressive disclosure pattern (each step builds on previous)