interface InstructionStepProps {
  stepNumber: number;
  instruction: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function InstructionStep({ 
  stepNumber, 
  instruction, 
  imageSrc, 
  imageAlt 
}: InstructionStepProps) {
  return (
    <div className="space-y-6 md:space-y-8" data-testid={`instruction-step-${stepNumber}`}>
      <div className="flex items-start gap-4">
        <div 
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0"
          data-testid={`step-badge-${stepNumber}`}
        >
          <span className="text-lg md:text-xl font-semibold text-primary-foreground">
            {stepNumber}
          </span>
        </div>
        <p 
          className="text-base md:text-lg leading-relaxed pt-2 md:pt-3"
          data-testid={`step-text-${stepNumber}`}
        >
          {instruction}
        </p>
      </div>
      
      {imageSrc && (
        <div 
          className="border border-border rounded-lg overflow-hidden"
          style={{ boxShadow: 'var(--shadow-lg)' }}
          data-testid={`step-image-${stepNumber}`}
        >
          <img 
            src={imageSrc} 
            alt={imageAlt || `Шаг ${stepNumber}`}
            className="w-full h-auto"
          />
        </div>
      )}
    </div>
  );
}
