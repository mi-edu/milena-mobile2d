import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return ( 
<ParallaxScrollView
        headerBackgroundColor={{ light: '#000', dark: '#000' }} // fundo preto
        headerImage={
          <Image
            source={require('@/assets/images/magnus.png')}
            style={styles.headerImage}
            resizeMode="cover" // faz a imagem cobrir a área toda
          />
        }
      >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">𝐀́𝐫𝐞𝐚 𝐏𝐢𝐱</ThemedText>
      </ThemedView>
      <ThemedText>Envie e receba pagamentos a qualquer hora e dia da semana, sem pagar nada por isso.</ThemedText>

      <Collapsible title="𝚃𝚛𝚊𝚗𝚏𝚎𝚛𝚒𝚛">
        <ThemedText>{' '}
          <ThemedText type="defaultSemiBold"></ThemedText>Você pode Enviar dinheiro para alguém, basta ter a chave pix dela (pode ser CPF/CNPJ ou o nome dela){' '}
        </ThemedText>
        <ExternalLink href="   ">
          <ThemedText type="link">𝚃𝚛𝚊𝚗𝚏𝚎𝚛𝚒𝚛</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="𝙿𝚛𝚘𝚐𝚛𝚊𝚖𝚊𝚛">
        <ThemedText>
        O pix programado, é algo para facilitar um pix que você faz com muita frequencia{' '}
        <ThemedText></ThemedText> {''}
          <ThemedText type="defaultSemiBold">Beneficios</ThemedText> Ganha tempo (você define quem recebe, a frequência e a gente faz sempre no dia certinho)
          Controle do dinheiro (você pode cancelar Pix programado quando quiser no seu Assistente de pagamento)</ThemedText>
          <ExternalLink href="asdfghj">
          <ThemedText type="link">𝙿𝚛𝚘𝚐𝚛𝚊𝚖𝚊𝚛</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="𝙻𝚎𝚛 𝚀𝚛 𝚌𝚘𝚍𝚎">
        <ThemedText> Você pode add um Qr code que é um CNPJ/CPF que ele ira automatocamente abrir uma aba para que você tranfira 
          o dinheiro para a outra <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
        <ExternalLink href="fghjk">
          <ThemedText type="link">𝙻𝚎𝚛 𝚀𝚛 𝚌𝚘𝚍𝚎</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="𝙲𝚘𝚋𝚛𝚊𝚛">
        <ThemedText>
        <ThemedText type="defaultSemiBold"></ThemedText> {' '} Você pode deixar agendado uma cobrança para uma pessoa, apenas coloque o dia e a hora 
        que a cobrança ira chegar para ela, logo ela vai tranferir o dinheiro a você e logo vamos te avisar que 
        seu dinheiro foi tranferido<ThemedText style={{ fontFamily: 'SpaceMono' }}>
          </ThemedText>
        </ThemedText>
        <ExternalLink href="guihj">
          <ThemedText type="link">𝙲𝚘𝚋𝚛𝚊𝚛</ThemedText>
        </ExternalLink>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
