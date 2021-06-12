import React, { FC } from 'react';
import { Box } from 'force-components';

interface Props {}

const Intro: FC<Props> = () => {
  return (
    <Box display="flex" data-testid="intro">
      <Box flex="1" bg="colorGreen300" p="4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore porro
        suscipit iusto voluptate praesentium dolorum exercitationem eius
        reiciendis cumque, officia veritatis esse alias quaerat accusamus dicta
        molestiae, fugiat, nulla dolorem. Deleniti magni at atque modi tempore
        ut quis necessitatibus ullam sed quasi. Deserunt amet nobis alias
        praesentium iure hic tempore ut quae, et fugit labore, nostrum, aut
        minus odit. Incidunt. Doloribus expedita quia officia aliquam cum.
        Soluta ut est dolorem doloribus aliquid culpa officiis delectus
        accusamus cumque iste voluptatem ullam non repudiandae nulla
        repellendus, vero cupiditate voluptates! Culpa, rem aliquid?
      </Box>
      <Box flex="1" bg="colorPurple800" p="4" color="colorGray200">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque a non
        rerum quis explicabo quae unde ipsa quas sequi cumque. Odio iure
        perferendis dignissimos nesciunt consequuntur fugiat quia non. Magni?
        Cupiditate, fugiat? Ipsum voluptatum magnam perferendis autem et
        consequatur nemo enim minima tempore ab pariatur, officia natus,
        accusamus illo sapiente nobis. Debitis consectetur dolorum numquam ab,
        eius ipsa voluptates cumque? Eum, quibusdam. Cupiditate, consequuntur
        aliquam incidunt quaerat omnis sapiente, numquam ipsam odio repellendus
        velit nostrum culpa rem temporibus sunt amet facere, obcaecati iste
        ipsum! Consectetur cumque praesentium voluptates commodi placeat! Labore
        dicta nobis reiciendis quo consectetur. Aliquam accusamus enim
        doloribus, dolorum alias possimus error blanditiis aut ad quas quasi
        maiores, doloremque aperiam ex, vitae maxime porro nihil neque totam.
        Nobis. Facilis, perspiciatis? Quam at animi illum in tenetur ullam iste
        exercitationem excepturi possimus molestiae adipisci quod quae
        blanditiis quasi voluptatem, quo iure? Eaque consequatur incidunt,
        blanditiis dolorem deleniti fugiat atque.
      </Box>
    </Box>
  );
};

export { Intro };
