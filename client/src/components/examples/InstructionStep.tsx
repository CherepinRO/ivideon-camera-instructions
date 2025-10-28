import InstructionStep from '../InstructionStep'

export default function InstructionStepExample() {
  return (
    <div className="p-8 bg-background">
      <InstructionStep
        stepNumber={1}
        instruction="В личном кабинете ivideon нажмите кнопку Добавить устройство"
        imageSrc="https://via.placeholder.com/800x200/0088ff/ffffff?text=Ivideon+Interface"
        imageAlt="Интерфейс Ivideon"
      />
    </div>
  )
}
