import styled from 'styled-components';

// ── Cabecera de perfil ──

export const AccountProfileCard = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.sm};
`;

export const AccountProfileCopy = styled.div`
  display: grid;
  gap: 0.1rem;
  min-width: 0;
`;

export const AccountProfileName = styled.h1`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.size.xl};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.color.text};
`;

export const AccountProfileMail = styled.span`
  color: ${({ theme }) => theme.color.textSoft};
  font-size: ${({ theme }) => theme.typography.size.sm};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const AccountProfileTag = styled.span`
  justify-self: start;
  margin-top: ${({ theme }) => theme.spacing[1]};
  padding: 0.15rem ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.primarySoft};
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

// ── Foto de perfil ──

export const AvatarSlot = styled.div`
  position: relative;
  flex: 0 0 auto;
`;

/** Toda la foto es el disparador: es lo que la gente intenta tocar. */
export const AvatarButton = styled.button`
  position: relative;
  display: block;
  padding: 0;
  border: 0;
  background: transparent;
  border-radius: ${({ theme }) => theme.radius.full};
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.primary};
    outline-offset: 3px;
  }
`;

/** Cámara sobre la foto: indica que se puede cambiar sin ocupar lugar. */
export const AvatarEditBadge = styled.span`
  position: absolute;
  right: -0.15rem;
  bottom: -0.15rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: ${({ theme }) => theme.radius.full};
  border: 2px solid ${({ theme }) => theme.color.surface};
  background: ${({ theme }) => theme.color.brand};
  color: ${({ theme }) => theme.color.onPrimary};
`;

export const AvatarRemove = styled.button`
  position: absolute;
  right: -0.15rem;
  top: -0.15rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: ${({ theme }) => theme.radius.full};
  border: 2px solid ${({ theme }) => theme.color.surface};
  background: ${({ theme }) => theme.color.surfaceMuted};
  color: ${({ theme }) => theme.color.textSoft};
  cursor: pointer;
  transition: color 180ms ease, background-color 180ms ease;

  &:hover {
    background: ${({ theme }) => theme.color.danger};
    color: #ffffff;
  }
`;

export const AvatarError = styled.span`
  color: ${({ theme }) => theme.color.danger};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: 1.3;
`;
