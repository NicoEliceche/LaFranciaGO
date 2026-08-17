import styled, { css } from 'styled-components';

const panelSurface = css`
  background: ${({ theme }) => theme.color.surface};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.xl};
  box-shadow: ${({ theme }) => theme.shadow.sm};
`;

export const PageGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.15fr) minmax(18rem, 0.85fr);
  }
`;

export const FormCard = styled.div`
  ${panelSurface}
  padding: ${({ theme }) => theme.layout.cardPadding};
`;

export const SidePanel = styled.div`
  ${panelSurface}
  padding: ${({ theme }) => theme.layout.cardPadding};
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const FormGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const FieldGroup = styled.label`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const FieldLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
`;

export const FieldHint = styled.span`
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.35;
`;

export const FieldInput = styled.input`
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  min-height: 3.5rem;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.text};
  transition:
    border-color 180ms ease,
    box-shadow 180ms ease,
    background-color 180ms ease;

  &:focus {
    border-color: ${({ theme }) => theme.color.borderStrong};
    background: ${({ theme }) => theme.color.surface};
    box-shadow: 0 0 0 2px rgba(11, 16, 32, 0.08);
  }
`;

export const FieldSelect = styled.select`
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  min-height: 3.5rem;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.text};
  transition:
    border-color 180ms ease,
    box-shadow 180ms ease,
    background-color 180ms ease;

  &:focus {
    border-color: ${({ theme }) => theme.color.borderStrong};
    background: ${({ theme }) => theme.color.surface};
    box-shadow: 0 0 0 2px rgba(11, 16, 32, 0.08);
  }
`;

export const FieldTextarea = styled.textarea`
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  min-height: 8rem;
  padding: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.text};
  resize: vertical;
  transition:
    border-color 180ms ease,
    box-shadow 180ms ease,
    background-color 180ms ease;

  &:focus {
    border-color: ${({ theme }) => theme.color.borderStrong};
    background: ${({ theme }) => theme.color.surface};
    box-shadow: 0 0 0 2px rgba(11, 16, 32, 0.08);
  }
`;

export const FieldStack = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const ToggleGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const ToggleButton = styled.button`
  ${panelSurface}
  min-height: 100%;
  padding: ${({ theme }) => theme.spacing[3]};
  text-align: left;
  cursor: pointer;
  display: grid;
  gap: ${({ theme }) => theme.spacing[1]};
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    border-color 180ms ease,
    background-color 180ms ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadow.md};
  }

  &[data-active='true'] {
    border-color: rgba(0, 71, 231, 0.2);
    background: ${({ theme }) => theme.color.primarySoft};
  }
`;

export const ToggleTitle = styled.span`
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const ToggleText = styled.span`
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.35;
`;

export const UploadBox = styled.label`
  ${panelSurface}
  padding: ${({ theme }) => theme.layout.cardPadding};
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  cursor: pointer;
`;

export const UploadTitle = styled.span`
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const UploadText = styled.span`
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
`;

export const ActionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const SummaryList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const RegistrationNotes = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const RegistrationSteps = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const SummaryItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.sm};
`;

export const SummaryBullet = styled.span`
  width: 0.5rem;
  height: 0.5rem;
  margin-top: 0.45rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.color.primary};
  flex: 0 0 auto;
`;

export const SectionDivider = styled.hr`
  width: 100%;
  margin: 0;
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.color.border};
`;

export const MiniBadge = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.textMuted};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;
