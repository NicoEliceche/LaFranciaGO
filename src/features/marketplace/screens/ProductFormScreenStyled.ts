import styled from 'styled-components';

// ── Formulario de alta de producto ──

export const FormCard = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.sm};
`;

export const FormGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const FormRow = styled.div`
  display: grid;
  gap: 0.3rem;
  min-width: 0;

  /* La descripción ocupa el ancho completo en dos columnas. */
  &:last-child {
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      grid-column: 1 / -1;
    }
  }
`;

export const FieldLabel = styled.label`
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const FieldHint = styled.span`
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.4;
`;

export const FieldError = styled.span`
  color: ${({ theme }) => theme.color.danger};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
`;

const fieldBase = `
  width: 100%;
  min-height: 2.9rem;
  padding: 0 0.85rem;
  border-radius: 0.75rem;
  font-size: 1rem;
`;

export const FormInput = styled.input`
  ${fieldBase};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.typography.fontFamily.body};

  &::placeholder {
    color: ${({ theme }) => theme.color.textSoft};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.color.primarySoft};
  }

  &[data-invalid='true'] {
    border-color: ${({ theme }) => theme.color.danger};
  }
`;

export const FormSelect = styled.select`
  ${fieldBase};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.color.primarySoft};
  }

  &[data-invalid='true'] {
    border-color: ${({ theme }) => theme.color.danger};
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.7rem 0.85rem;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.text};
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-size: 1rem;
  resize: vertical;

  &::placeholder {
    color: ${({ theme }) => theme.color.textSoft};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.color.primarySoft};
  }
`;

// ── Fotos y video ──

export const MediaSectionHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[1]};
`;

export const MediaCounter = styled.span`
  padding: 0.1rem 0.5rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.primarySoft};
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[2]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
`;

export const MediaSlot = styled.div`
  position: relative;
  aspect-ratio: 1 / 1;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surfaceMuted};
  overflow: hidden;

  &[data-video='true'] {
    aspect-ratio: 16 / 9;
  }
`;

export const MediaSlotImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const MediaSlotVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  background: #000;
`;

export const MediaRemoveButton = styled.button`
  position: absolute;
  top: 0.3rem;
  right: 0.3rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
  border: 0;
  border-radius: ${({ theme }) => theme.radius.full};
  background: rgba(5, 8, 22, 0.68);
  color: #fff;
  cursor: pointer;
  transition: background-color 180ms ease;

  &:hover {
    background: ${({ theme }) => theme.color.danger};
  }
`;

export const MediaAddButton = styled.button`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  aspect-ratio: 1 / 1;
  border: 1px dashed ${({ theme }) => theme.color.borderStrong};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: transparent;
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  transition: border-color 180ms ease, background-color 180ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.color.primary};
    background: ${({ theme }) => theme.color.primarySoft};
  }

  &[data-busy='true'] {
    opacity: 0.7;
    cursor: progress;
  }

  &[data-wide='true'] {
    width: 100%;
    aspect-ratio: auto;
    min-height: 3.25rem;
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing[2]};
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  min-height: 3rem;
  margin-top: ${({ theme }) => theme.spacing[1]};
  border: 0;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.brand};
  color: ${({ theme }) => theme.color.onPrimary};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  transition: background-color 180ms ease, transform 180ms ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({ theme }) => theme.color.brandHover};
  }
`;

export const SavedNotice = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  margin: 0;
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: rgba(15, 157, 88, 0.12);
  color: ${({ theme }) => theme.color.success};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;
